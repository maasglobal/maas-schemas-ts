#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

const [, , inputFile, outputDir] = process.argv;
const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));

const schema: JSONSchema7 = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

const imps = new Set<string>();
const exps = new Set<string>();

// eslint-disable-next-line
let failure: any = false;

function notImplemented(item: string) {
  console.error(), console.error(`ERROR: ${item} NOT supported by convert.ts`);
  console.error(`  in ${path.resolve(inputFile)}`);
  // eslint-disable-next-line
  failure = true;
  const escalate = "throw new Error('schema conversion failed')";
  return gen.customCombinator(escalate, escalate);
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

const camelFromKebab = (kebab: string) => {
  const camel = kebab
    .split('-')
    .map(capitalize)
    .join('');
  return camel;
};

function parseRef(ref: string) {
  const parts = ref.split('#');
  if (parts.length === 1) {
    const [filePath] = parts;
    return { filePath, variableName: 'Default' };
  }
  if (parts.length > 2) {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  const [filePath, jsonPath] = parts;
  // eslint-disable-next-line
  const [name] = jsonPath.split('/').reverse();
  const variableName = camelFromKebab(name);
  return { filePath, variableName };
}

function getRequiredProperties(schema: JSONSchema7): { [key: string]: true } {
  const required: { [key: string]: true } = {};
  if (schema.required) {
    schema.required.forEach(function(k) {
      // eslint-disable-next-line
      required[k] = true;
    });
  }
  return required;
}

function toInterfaceCombinator(schema: JSONSchema7): gen.InterfaceCombinator {
  const properties = schema.properties || {};
  const required = getRequiredProperties(schema);
  return gen.interfaceCombinator(
    Object.entries(properties).map(<K extends string, V>([key, value]: [K, V]) =>
      gen.property(
        key,
        // eslint-disable-next-line
        fromSchema(value),
        !required.hasOwnProperty(key),
      ),
    ),
  );
}

function checkPattern(x: string, pattern: string): string {
  return `( typeof x !== 'string' || ${x}.match(/${pattern}/) !== null )`;
}

function checkMinLength(x: string, minLength: number): string {
  return `( typeof x !== 'string' || ${x}.length >= ${minLength} )`;
}

function checkMaxLength(x: string, maxLength: number): string {
  return `( typeof x !== 'string' || ${x}.length <= ${maxLength} )`;
}

function checkMinimum(x: string, minimum: number): string {
  return `( typeof x !== 'number' || ${x} >= ${minimum} )`;
}

function checkMaximum(x: string, maximum: number): string {
  return `( typeof x !== 'string' || ${x} <= ${maximum} )`;
}

function checkInteger(x: string): string {
  return `( Number.isInteger(${x}) )`;
}

function checkEnum(x: string, examples: Array<any>): string {
  const options = examples.map((example) => {
    // use our JSON.stringify to convert example into js code
    const jsExample = JSON.stringify(example);

    // use user's JSON.stringify to perform object comparison
    return `JSON.stringify(${x}) === JSON.stringify(${jsExample})`;
  });
  return options.join(' || ');
}

function generateChecks(x: string, schema: JSONSchema7): string {
  const checks: Array<string> = [
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
    ...(schema.enum ? [checkEnum(x, schema.enum)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

function fromRef(refString: string): gen.TypeReference {
  const ref = parseRef(refString);

  if (ref.filePath === '') {
    return gen.customCombinator(ref.variableName, ref.variableName);
  }

  // eslint-disable-next-line
  const [withoutPath] = ref.filePath.split('/').reverse();
  const [basefile] = withoutPath.split('.json');
  const importName = `${camelFromKebab(basefile)}_`;
  const domain = 'http://maasglobal.com/';
  if (ref.filePath.startsWith(domain) === false) {
    return notImplemented('relative references');
  }
  const [, withoutDomain] = ref.filePath.split(domain);
  const [importPath] = withoutDomain.split('.json');
  imps.add(`import * as ${importName} from 'src/${importPath}';`);
  const variableRef = `${importName}.${ref.variableName}`;
  return gen.customCombinator(variableRef, variableRef);
}

function isSupported(feature: string) {
  const supported = [
    '$ref',
    '$id',
    'title',
    'description',
    'definitions',
    'type',
    'minimum',
    'maximum',
    'minLength',
    'maxLength',
    'properties',
    'required',
    'enum',
  ];
  return supported.includes(feature);
}

function fromSchema(schema: JSONSchema7Definition): gen.TypeReference {
  if (typeof schema === 'boolean') {
    imps.add("import * as t from 'io-ts';");
    return gen.literalCombinator(schema);
  }
  // eslint-disable-next-line
  for (const key in schema) {
    if (isSupported(key) !== true) {
      return notImplemented(key + ' FIELD');
    }
  }
  if ('$ref' in schema) {
    if (typeof schema['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    return fromRef(schema['$ref']);
  }
  imps.add("import * as t from 'io-ts';");
  switch (schema.type) {
    case 'string':
      return gen.stringType;
    case 'number':
    case 'integer':
      return gen.numberType;
    case 'boolean':
      return gen.booleanType;
    case 'object':
      return toInterfaceCombinator(schema);
    case 'array':
      return notImplemented('array TYPE');
  }
  if ('enum' in schema) {
    return notImplemented('standalone enum TYPE');
  }
  if (typeof schema.type !== 'undefined') {
    return notImplemented(`${JSON.stringify(schema.type)} TYPE`);
  }
  // eslint-disable-next-line
  throw new Error(`unknown schema: ${JSON.stringify(schema)}`)
}

function fromDefinitions(
  definitions2: JSONSchema7['definitions'],
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  const definitions = definitions2 || {};
  return Object.entries(definitions).map(([k, v]: [string, JSONSchema7Definition]) => {
    const scem = v;
    const name = capitalize(k);

    if (typeof scem === 'boolean') {
      // booleans do not have meta data
      const title = undefined;
      const description = undefined;
      return [
        title,
        description,
        gen.typeDeclaration(
          name,
          gen.brandCombinator(fromSchema(scem), (_x) => 'true', name),
          true,
        ),
      ];
    }
    if ('$ref' in scem) {
      // ref's do not have meta data
      const title = undefined;
      const description = undefined;
      if (typeof scem['$ref'] === 'undefined') {
        // eslint-disable-next-line
        throw new Error('broken input');
      }
      return [
        title,
        description,
        gen.typeDeclaration(capitalize(k), fromRef(scem['$ref']), true),
      ];
    }
    return [
      scem.title,
      scem.description,
      gen.typeDeclaration(
        name,
        gen.brandCombinator(fromSchema(scem), (x) => generateChecks(x, scem), name),
        true,
      ),
    ];
  });
}

function fromNonRefRoot(
  schema: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  // root schema info is printed in the beginning of the file
  const title = undefined;
  const description = undefined;
  try {
    return [
      [
        title,
        description,
        gen.typeDeclaration(
          'Default',
          gen.brandCombinator(
            fromSchema(schema),
            (x) => generateChecks(x, schema),
            'Default',
          ),
          true,
        ),
      ],
    ];
  } catch {
    return [];
  }
}

function fromRoot(
  root: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  // root schema info is printed in the beginning of the file
  const title = undefined;
  const description = undefined;

  if ('$ref' in root) {
    if (typeof root['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    exps.add('export default Default;');
    return [
      [title, description, gen.typeDeclaration('Default', fromRef(root['$ref']), true)],
    ];
  }
  const items = fromNonRefRoot(schema);
  if (items.length > 0) {
    imps.add("import * as t from 'io-ts';");
    exps.add('export default Default;');
  }
  return items;
}

function fromFile(
  schema: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  return fromRoot(schema).concat(fromDefinitions(schema.definitions));
}

const declarations = fromFile(schema as JSONSchema7);
const defs: Array<
  [JSONSchema7['title'], JSONSchema7['description'], string, string]
> = declarations.map(([t, c, d]) => [
  t,
  c,
  gen.printStatic(d),
  gen.printRuntime(d).replace(/\ninterface /, '\nexport interface '),
]);

if (failure === true) {
  process.exit();
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
const fd = fs.openSync(outputFile, 'w');
fs.writeFileSync(fd, '');

const log = (a: string) => fs.appendFileSync(fd, `${a}\n`);

log('/*');
log('');
log(`${schema.title}`);
log(`${schema.description}`);
log('');
log('!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!');
log('');
log('*/');
log('');
imps.forEach(log);
log('');
log(`export const schemaId = '${schema.$id}';`);

// eslint-disable-next-line
for (const [t, c, s, r] of defs) {
  log('');
  if (typeof t !== 'undefined') {
    log(`// ${t}`);
  }
  if (typeof c !== 'undefined') {
    log(`// ${c}`);
  }
  log(s);
  log(r);
}

log('');
exps.forEach(log);
log('');
log('// Success');
fs.closeSync(fd);

console.log('DONE');
