declare global {
  interface ObjectConstructor {
    new(): Object;
    isObject(o: any): boolean;
    merge(...args: Object[]): Object;
    concat(...args: Object[]): Object;
  }

  interface Object {
    $clone(): Object;
    $length(): number;
    $entries(): IterableIterator<[string, any]>;
    $keys(): IterableIterator<string>;
    $values(): IterableIterator<any>;
    $assign(...args: any[]): Object;
    $stringify(v: any, replacer?: any, space?: string): string;
    $merge(...args: Object[]): Object;
    $concat(...args: Object[]): Object;
    $empty(): boolean;
    $has(key: string): boolean;
    $pick(...keys: string[]): Object;
    $omit(...keys: string[]): Object;
    $attr(key: string): any;
    $attr(key: string, val: any ): any;
    $attr(key: string, val: any, exists?: boolean): any;
    $attr(key: string, val: any, exists?: boolean, define?: boolean|Object): any;
    $attr(key: string, val: any, exists?: boolean, defval?: any): any;
    $pipe(pipe: (v: Object, ...args: any[]) => any, ...args: any[]): any;
    $tee(tee: (v: Object, ...args: any[]) => any, ...args: any[]): any;
    $toArray(): any[];
    $debug(...args: any[]): any;
    $log(...args: any[]): any;
    $info(...args: any[]): any;
    $warn(...args: any[]): any;
    $error(...args: any[]): any;
    $dir(...args: any[]): any;
    $debugger(...args: any[]): any;
    $getParents(self?: boolean, depth?: number, parent?: string): any[];
    $getChildrens(self?: boolean, depth?: number, children?: string): any[];
    $tree$find(cb: (node: any) => boolean, self?: boolean, depth?: number, children?: string): any;
    $tree$each(cb: (node: any) => void, self?: boolean, depth?: number, children?: string): void;
    $tree$map(cb: (node: any) => any, self?: boolean, depth?: number, children?: string, empty?: any): any;
  }

  interface Number {
    ceil(): number;
    floor(): number;
    trunc(): number;
    abs(): number;
    max(...args: number[]): number;
    min(...args: number[]): number;
    fixed(decimal?: number): number;
    round(precision?: number): number;
    add(v: number): number;
    add(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    sub(v: number): number;
    sub(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    mul(v: number): number;
    mul(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    div(v: number): number;
    div(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    baseConvert(base?: number): string;
    unit(units: Record<string, number>, decimal?: number): string;
    units(units: Record<string, number>, array?: boolean): string | [number, string][];
    toDate(): Date;
  }

  interface BigInt {
    toJSON(): number | string;
  }

  interface StringConstructor {
    new(): string;
  }

  interface String {
    $length(): number;
    $substring(s?: number, e?: number): string;
    $substr(s?: number, e?: number): string;
    $split(s?: string, n?: number): string[];
    $split$number(s?: string): number[];
    $split$segment(n?: number): string[];
    sprintf(...args: any[]): string;
    subOf(begin: string, end: string, n?: number, position?: number): string;
    lastSubOf(begin: string, end: string, n?: number, position?: number): string;
    camel2under(): string;
    under2camel(): string;
    camel2pascal(): string;
    pascal2camel(): string;
    under2kebab(): string;
    kebab2under(): string;
    baseConvert(base?: number): string;
    fixed(decimal?: number): string;
    toDate(): Date;
    toUint8Array(): Uint8Array;
    hexencode(): string;
    hexdecode(): string;
    base64encode(): string;
    base64decode(): string;
  }

  interface ArrayConstructor {
    new(): any[];
    new<T>(): T[];
    new<T>(...items: T[]): T[];
    new<T>(length: number): T[];
    range<T>(end: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
    range<T>(start: number, end: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
    range<T>(start: number, end: number, step: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
  }

  interface Array<T> {
    $length(): number;
    $entries(): IterableIterator<[number, T]>;
    $keys(): IterableIterator<number>;
    $values(): IterableIterator<T>;
    $map<U>(callback: (v: any, i: number, array: T[]) => U): U[];
    $push(...items: T[]): T[];
    $pop(): T[];
    $shift(): T[];
    $unshift(...items: T[]): T[];
    $splice(start: number, deleteCount?: number, ...items: T[]): T[];
    $pusha(...items: T[]): T[];
    $unshifta(...items: T[]): T[];
    $push0(...items: T[]): T;
    $unshift0(...items: T[]): T;
    $empty(): boolean;
    first(defval?: T): T;
    last(defval?: T): T;
    $find(cb: (value: T, index: number, array: T[]) => boolean, defval?: T): T;
    equals(a: T[]): boolean;
    unique(cb?: (value: T) => any): T[];
    each(cb: (value: T, index: number, array: T[]) => void): T[];
    each$async(cb: (value: T, index: number, array: T[]) => Promise<void>): Promise<T[]>;
    map$async<U>(cb: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]>;
    shuffle(clone?: boolean): T[];
    union(a: T[]): T[];
    intersection(a: T[]): T[];
    difference(a: T[]): T[];
    symmetricDifference(a: T[]): T[];
    toMap(cb?: (value: T, index: number) => [any, any]): Map<any, any>;
    toSet(cb?: (value: T) => any): Set<any>;
    toUint8Array(): Uint8Array;
    toBase64(): string;
    toHex(): string;
    decode(): string;
    // assoc
    // toTree
    // $tree2tree
    // $tree$find
    // $tree$each
    // $tree$map
  }

  interface MapConstructor {
    new<K, V>(): Map<K, V>;
    new<K, V>(iterator: Iterator<K, V, V>): Map<K, V>;
  }

  interface Map<K, V> {
    $length(): number;
    $entries(): IterableIterator<[K, V]>;
    $keys(): IterableIterator<K>;
    $values(): IterableIterator<V>;
    $set(key: K, value: V): Map<K, V>;
    $delete(key: K): Map<K, V>;
    $seta(key: K, value: V): [K, V];
    $deletea(key: K): [K];
    $set0(key: K, value: V): K;
    $delete0(key: K): K;
    $set1(key: K, value: V): V;
    $delete1(key: K): V;
    $getOrInsert(key: K, defval?: V): V;
    $getOrInsertComputed(key: K, callback: (key: K) => V): V;
    $get(key: K, defval?: V | ((key: K) => V)): V;
    $get$async(key: K, defval?: V | ((key: K) => Promise<V>)): Promise<V>;
    toObject(): Record<string, V>;
    toArray(): [K, V][];
    toJSON(): [K, V][];
    getOrInsert(key: K, defval?: V): V;
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
  }

  interface SetConstructor {
    new<T>(): Set<T>;
    new<T>(iterator: Iterator<T, T, T>): Set<T>;
  }

  interface Set<T> {
    $length(): number;
    $entries(): IterableIterator<[T, T]>;
    $keys(): IterableIterator<T>;
    $values(): IterableIterator<T>;
    $add(value: T): Set<T>;
    $delete(value: T): Set<T>;
    $adda(value: T): [T];
    $deletea(value: T): [T];
    $add0(value: T): T;
    $delete0(value: T): T;
    $union(s: Set<T>): Set<T>;
    $intersection(s: Set<T>): Set<T>;
    $difference(s: Set<T>): Set<T>;
    $symmetricDifference(s: Set<T>): Set<T>;
    toArray(): T[];
    toJSON(): T[];
  }

  interface DateConstructor {
    new(...args: any[]): Date;
    format(format?: string): string;
    unix(): number;
    fromUnix(time: number): Date;
    expr(opts: { y?: number; m?: number; d?: number; h?: number; i?: number; s?: number }): Date;
    toDayRange(): [number, number];
    toWeekRange(): [number, number];
    toMonthRange(): [number, number];
    toYearRange(): [number, number];
  }

  interface Date {
    format(format?: string): string;
    unix(): number;
    isLeapYear(): boolean;
    getMonthDay(): number;
    expr(opts?: { y?: number; m?: number; d?: number; h?: number; i?: number; s?: number }): Date;
    begin(n?: number): Date;
    end(n?: number): Date;
    week(n?: number, dir?: number): Date;
    toJSON(): string;
  }

  interface RegExp {
    toJSON(): string;
  }

  interface PromiseConstructor {
    $channel(): [Promise<any>, (value: any) => void, (reason: any) => void];
    $withResolvers(): { promise: Promise<any>; resolve: (value: any) => void; reject: (reason: any) => void; };
  }

  interface Promise<T> {
    tryCatch(): Promise<[T, null] | [null, any]>;
  }

  interface JSON {
    $parse(v: any, defval?: any): any;
  }

  interface Iterator<T> {
    toArray(): T[];
  }

  interface ArrayBuffer {
    toUint8Array(): Uint8Array;
  }

  interface Uint8ArrayConstructor {
    new(): Uint8Array;
    new(length: number): Uint8Array;
    fromString(str: string): Uint8Array;
    $fromHex(str: string): Uint8Array;
    $fromBase64(str: string): Uint8Array;
  }

  interface Uint8Array {
    setFromString(str: string, targetOffset?: number): Object;
    $setFromHex(str: string, targetOffset?: number): Object;
    $setFromBase64(str: string, targetOffset?: number): Object;
    toString(): string;
    $toHex(): string;
    $toBase64(): string;
    toArray(): number[];
  }

  interface Math {
    randstr(len?: number, slen?: number, chars?: string, schars?: string): string;
    randint(min?: number, max?: number): number;
    incrid(): number;
    incrstr(): string;
    uniqid(now?: number): number;
    uniqstr(): string;
    sleep(duration: number): Promise<void>;
    useTemplate(name: string): any;
  }

  class LRU<K, V> extends Map<K, V> {
    constructor(capacity: number);
    get(key: K): V | undefined;
    getOrInsert(key: K, defval: V): V;
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
    getOrInsertComputedAsync(key: K, callback: (key: K) => Promise<V>): Promise<V>;
    set(key: K, value: V): this;
    put(key: K, value: V): this;
  }

  interface LRUConstructor {
    new <K, V>(capacity: number): LRU<K, V>;
  }
}

export {};
