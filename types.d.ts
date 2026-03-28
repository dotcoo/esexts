/**
 * ES 扩展类型定义
 * 为 JavaScript 内置对象添加扩展方法
 */
declare global {
  /**
   * Object 构造函数扩展
   */
  interface ObjectConstructor {
    /**
     * 创建一个新的 Object 实例
     */
    new(): Object;
    
    /**
     * 检查一个值是否为对象
     * @param o 要检查的值
     * @returns 如果是对象返回 true，否则返回 false
     */
    isObject(o: any): boolean;
    
    /**
     * 合并多个对象
     * @param args 要合并的对象列表
     * @returns 合并后的新对象
     */
    merge(...args: Object[]): Object;
    
    /**
     * 连接多个对象
     * @param args 要连接的对象列表, 数组会合并, 而不是覆盖
     * @returns 连接后的新对象
     */
    concat(...args: Object[]): Object;
  }

  /**
   * Object 实例扩展
   */
  interface Object {
    /**
     * 克隆对象
     * @returns 克隆后的新对象
     */
    $clone(): Object;
    
    /**
     * 获取对象的长度（属性数量）
     * @returns 对象的属性数量
     */
    $length(): number;
    
    /**
     * 获取对象的键值对迭代器
     * @returns 键值对迭代器
     */
    $entries(): IterableIterator<[string, any]>;
    
    /**
     * 获取对象的键迭代器
     * @returns 键迭代器
     */
    $keys(): IterableIterator<string>;
    
    /**
     * 获取对象的值迭代器
     * @returns 值迭代器
     */
    $values(): IterableIterator<any>;
    
    /**
     * 分配属性到对象
     * @param args 要分配的属性源
     * @returns 分配后的对象
     */
    $assign(...args: any[]): Object;
    
    /**
     * 将值转换为 JSON 字符串
     * @param v 要转换的值
     * @param replacer 替换函数或数组
     * @param space 缩进空格
     * @returns JSON 字符串
     */
    $stringify(v: any, replacer?: any, space?: string): string;
    
    /**
     * 合并多个对象到当前对象
     * @param args 要合并的对象列表
     * @returns 合并后的对象
     */
    $merge(...args: Object[]): Object;
    
    /**
     * 连接多个对象到当前对象
     * @param args 要连接的对象列表, 数组会合并, 而不是覆盖
     * @returns 连接后的对象
     */
    $concat(...args: Object[]): Object;
    
    /**
     * 检查对象是否为空
     * @returns 如果对象为空返回 true，否则返回 false
     */
    $empty(): boolean;
    
    /**
     * 检查对象是否包含指定键
     * @param key 要检查的键
     * @returns 如果包含指定键返回 true，否则返回 false
     */
    $has(key: string): boolean;
    
    /**
     * 从对象中选取指定键的属性
     * @param keys 要选取的键列表
     * @returns 包含指定键属性的新对象
     */
    $pick(...keys: string[]): Object;
    
    /**
     * 从对象中排除指定键的属性
     * @param keys 要排除的键列表
     * @returns 排除指定键属性的新对象
     */
    $omit(...keys: string[]): Object;
    
    /**
     * 获取对象的属性
     * @param key 属性键
     * @returns 属性值
     */
    $attr(key: string): any;
    
    /**
     * 设置对象的属性
     * @param key 属性键
     * @param val 属性值
     * @returns 设置后的值
     */
    $attr(key: string, val: any ): any;
    
    /**
     * 设置对象的属性（带存在性检查）
     * @param key 属性键
     * @param val 属性值
     * @param exists 是否检查属性是否存在
     * @returns 设置后的值
     */
    $attr(key: string, val: any, exists?: boolean): any;
    
    /**
     * 设置对象的属性（带定义选项）
     * @param key 属性键
     * @param val 属性值
     * @param exists 是否检查属性是否存在
     * @param define 定义选项
     * @returns 设置后的值
     */
    $attr(key: string, val: any, exists?: boolean, define?: boolean|Object): any;
    
    /**
     * 设置对象的属性（带默认值）
     * @param key 属性键
     * @param val 属性值
     * @param exists 是否检查属性是否存在
     * @param defval 默认值
     * @returns 设置后的值
     */
    $attr(key: string, val: any, exists?: boolean, defval?: any): any;
    
    /**
     * 通过管道函数处理对象
     * @param pipe 管道函数
     * @param args 额外参数
     * @returns 管道函数的返回值
     */
    $pipe(pipe: (v: Object, ...args: any[]) => any, ...args: any[]): any;
    
    /**
     * 执行副作用函数并返回原对象
     * @param tee 副作用函数
     * @param args 额外参数
     * @returns 原对象
     */
    $tee(tee: (v: Object, ...args: any[]) => any, ...args: any[]): any;
    
    /**
     * 将对象转换为数组
     * @returns 对象转换后的数组
     */
    $toArray(): any[];
    
    /**
     * 输出调试信息
     * @param args 调试信息
     * @returns 原对象
     */
    $debug(...args: any[]): any;
    
    /**
     * 输出日志信息
     * @param args 日志信息
     * @returns 原对象
     */
    $log(...args: any[]): any;
    
    /**
     * 输出信息
     * @param args 信息
     * @returns 原对象
     */
    $info(...args: any[]): any;
    
    /**
     * 输出警告信息
     * @param args 警告信息
     * @returns 原对象
     */
    $warn(...args: any[]): any;
    
    /**
     * 输出错误信息
     * @param args 错误信息
     * @returns 原对象
     */
    $error(...args: any[]): any;
    
    /**
     * 输出对象的详细信息
     * @param args 额外参数
     * @returns 原对象
     */
    $dir(...args: any[]): any;
    
    /**
     * 触发调试器断点
     * @param args 额外参数
     * @returns 原对象
     */
    $debugger(...args: any[]): any;
    
    /**
     * 获取对象的父级链
     * @param self 是否包含自身
     * @param depth 深度限制
     * @param parent 父级属性名
     * @returns 父级链数组
     */
    $getParents(self?: boolean, depth?: number, parent?: string): any[];
    
    /**
     * 获取对象的子级链
     * @param self 是否包含自身
     * @param depth 深度限制
     * @param children 子级属性名
     * @returns 子级链数组
     */
    $getChildrens(self?: boolean, depth?: number, children?: string): any[];
    
    /**
     * 在树结构中查找节点
     * @param cb 查找回调函数
     * @param self 是否包含自身
     * @param depth 深度限制
     * @param children 子级属性名
     * @returns 找到的节点
     */
    $tree$find(cb: (node: any) => boolean, self?: boolean, depth?: number, children?: string): any;
    
    /**
     * 遍历树结构中的节点
     * @param cb 遍历回调函数
     * @param self 是否包含自身
     * @param depth 深度限制
     * @param children 子级属性名
     */
    $tree$each(cb: (node: any) => void, self?: boolean, depth?: number, children?: string): void;
    
    /**
     * 映射树结构中的节点
     * @param cb 映射回调函数
     * @param self 是否包含自身
     * @param depth 深度限制
     * @param children 子级属性名
     * @param empty 空值处理
     * @returns 映射后的树结构
     */
    $tree$map(cb: (node: any) => any, self?: boolean, depth?: number, children?: string, empty?: any): any;
  }

  /**
   * Number 实例扩展
   */
  interface Number {
    /**
     * 向上取整
     * @returns 向上取整后的值
     */
    ceil(): number;
    
    /**
     * 向下取整
     * @returns 向下取整后的值
     */
    floor(): number;
    
    /**
     * 截断小数部分
     * @returns 截断后的值
     */
    trunc(): number;
    
    /**
     * 获取绝对值
     * @returns 绝对值
     */
    abs(): number;
    
    /**
     * 获取最大值
     * @param args 比较值列表
     * @returns 最大值
     */
    max(...args: number[]): number;
    
    /**
     * 获取最小值
     * @param args 比较值列表
     * @returns 最小值
     */
    min(...args: number[]): number;
    
    /**
     * 固定小数位数
     * @param decimal 小数位数
     * @returns 固定小数位数后的值
     */
    fixed(decimal?: number): number;
    
    /**
     * 四舍五入
     * @param precision 精度
     * @returns 四舍五入后的值
     */
    round(precision?: number): number;
    
    /**
     * 加法运算
     * @param v 加数
     * @returns 加法结果
     */
    add(v: number): number;
    
    /**
     * 使用函数进行加法运算
     * @param v 加法函数
     * @param args 函数参数
     * @returns 加法结果
     */
    add(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    
    /**
     * 减法运算
     * @param v 减数
     * @returns 减法结果
     */
    sub(v: number): number;
    
    /**
     * 使用函数进行减法运算
     * @param v 减法函数
     * @param args 函数参数
     * @returns 减法结果
     */
    sub(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    
    /**
     * 乘法运算
     * @param v 乘数
     * @returns 乘法结果
     */
    mul(v: number): number;
    
    /**
     * 使用函数进行乘法运算
     * @param v 乘法函数
     * @param args 函数参数
     * @returns 乘法结果
     */
    mul(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    
    /**
     * 除法运算
     * @param v 除数
     * @returns 除法结果
     */
    div(v: number): number;
    
    /**
     * 使用函数进行除法运算
     * @param v 除法函数
     * @param args 函数参数
     * @returns 除法结果
     */
    div(v: ((v:number, ...args: any[]) => number), ...args: any[]): number;
    
    /**
     * 进制转换
     * @param base 目标进制
     * @returns 转换后的字符串
     */
    baseConvert(base?: number): string;
    
    /**
     * 单位转换
     * @param units 单位定义
     * @param decimal 小数位数
     * @returns 转换后的字符串
     */
    unit(units: Record<string, number>, decimal?: number): string;
    
    /**
     * 单位转换（支持数组输出）
     * @param units 单位定义
     * @param array 是否返回数组
     * @returns 转换后的字符串或数组
     */
    units(units: Record<string, number>, array?: boolean): string | [number, string][];
    
    /**
     * 转换为日期对象
     * @returns 日期对象
     */
    toDate(): Date;
  }

  /**
   * BigInt 实例扩展
   */
  interface BigInt {
    /**
     * 转换为 JSON 格式
     * @returns 转换后的数字或字符串
     */
    toJSON(): number | string;
  }

  /**
   * String 构造函数扩展
   */
  interface StringConstructor {
    /**
     * 创建一个新的 String 实例
     */
    new(): string;
  }

  /**
   * String 实例扩展
   */
  interface String {
    /**
     * 获取字符串长度
     * @returns 字符串长度
     */
    $length(): number;
    
    /**
     * 截取子字符串
     * @param s 开始位置
     * @param e 结束位置
     * @returns 截取的子字符串
     */
    $substring(s?: number, e?: number): string;
    
    /**
     * 截取子字符串（从指定位置开始）
     * @param s 开始位置
     * @param e 长度
     * @returns 截取的子字符串
     */
    $substr(s?: number, e?: number): string;
    
    /**
     * 分割字符串
     * @param s 分隔符
     * @param n 分割数量
     * @returns 分割后的数组
     */
    $split(s?: string, n?: number): string[];
    
    /**
     * 分割字符串并转换为数字数组
     * @param s 分隔符
     * @returns 数字数组
     */
    $split$number(s?: string): number[];
    
    /**
     * 按指定长度分割字符串
     * @param n 分割长度
     * @returns 分割后的数组
     */
    $split$segment(n?: number): string[];
    
    /**
     * 格式化字符串
     * @param args 格式化参数
     * @returns 格式化后的字符串
     */
    sprintf(...args: any[]): string;
    
    /**
     * 提取两个字符串之间的内容
     * @param begin 开始字符串
     * @param end 结束字符串
     * @param n 提取数量
     * @param position 开始位置
     * @returns 提取的内容
     */
    subOf(begin: string, end: string, n?: number, position?: number): string;
    
    /**
     * 从末尾提取两个字符串之间的内容
     * @param begin 开始字符串
     * @param end 结束字符串
     * @param n 提取数量
     * @param position 开始位置
     * @returns 提取的内容
     */
    lastSubOf(begin: string, end: string, n?: number, position?: number): string;
    
    /**
     * 驼峰命名转换为下划线命名
     * @returns 下划线命名的字符串
     */
    camel2under(): string;
    
    /**
     * 下划线命名转换为驼峰命名
     * @returns 驼峰命名的字符串
     */
    under2camel(): string;
    
    /**
     * 驼峰命名转换为帕斯卡命名
     * @returns 帕斯卡命名的字符串
     */
    camel2pascal(): string;
    
    /**
     * 帕斯卡命名转换为驼峰命名
     * @returns 驼峰命名的字符串
     */
    pascal2camel(): string;
    
    /**
     * 下划线命名转换为短横线命名
     * @returns 短横线命名的字符串
     */
    under2kebab(): string;
    
    /**
     * 短横线命名转换为下划线命名
     * @returns 下划线命名的字符串
     */
    kebab2under(): string;
    
    /**
     * 进制转换
     * @param base 目标进制
     * @returns 转换后的字符串
     */
    baseConvert(base?: number): string;
    
    /**
     * 固定小数位数
     * @param decimal 小数位数
     * @returns 固定小数位数后的字符串
     */
    fixed(decimal?: number): string;
    
    /**
     * 转换为日期对象
     * @returns 日期对象
     */
    toDate(): Date;
    
    /**
     * 转换为 Uint8Array
     * @returns Uint8Array
     */
    toUint8Array(): Uint8Array;
    
    /**
     * 十六进制编码
     * @returns 十六进制编码的字符串
     */
    hexencode(): string;
    
    /**
     * 十六进制解码
     * @returns 解码后的字符串
     */
    hexdecode(): string;
    
    /**
     * Base64 编码
     * @returns Base64 编码的字符串
     */
    base64encode(): string;
    
    /**
     * Base64 解码
     * @returns 解码后的字符串
     */
    base64decode(): string;
  }

  /**
   * Array 构造函数扩展
   */
  interface ArrayConstructor {
    /**
     * 创建一个新的数组实例
     */
    new(): any[];
    
    /**
     * 创建一个新的泛型数组实例
     */
    new<T>(): T[];
    
    /**
     * 通过元素创建一个新的数组实例
     * @param items 数组元素
     */
    new<T>(...items: T[]): T[];
    
    /**
     * 通过长度创建一个新的数组实例
     * @param length 数组长度
     */
    new<T>(length: number): T[];
    
    /**
     * 创建一个范围数组
     * @param end 结束值
     * @param callback 回调函数
     * @param input 是否将索引作为输入
     * @returns 范围数组
     */
    range<T>(end: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
    
    /**
     * 创建一个范围数组
     * @param start 开始值
     * @param end 结束值
     * @param callback 回调函数
     * @param input 是否将索引作为输入
     * @returns 范围数组
     */
    range<T>(start: number, end: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
    
    /**
     * 创建一个范围数组
     * @param start 开始值
     * @param end 结束值
     * @param step 步长
     * @param callback 回调函数
     * @param input 是否将索引作为输入
     * @returns 范围数组
     */
    range<T>(start: number, end: number, step: number, callback?: ((number: number, i: number, a: T[]) => T), input?: boolean): T[];
  }

  /**
   * Array 实例扩展
   */
  interface Array<T> {
    /**
     * 获取数组长度
     * @returns 数组长度
     */
    $length(): number;
    
    /**
     * 获取数组的键值对迭代器
     * @returns 键值对迭代器
     */
    $entries(): IterableIterator<[number, T]>;
    
    /**
     * 获取数组的键迭代器
     * @returns 键迭代器
     */
    $keys(): IterableIterator<number>;
    
    /**
     * 获取数组的值迭代器
     * @returns 值迭代器
     */
    $values(): IterableIterator<T>;
    
    /**
     * 映射数组元素
     * @param callback 映射函数
     * @returns 映射后的新数组
     */
    $map<U>(callback: (v: any, i: number, array: T[]) => U): U[];
    
    /**
     * 向数组末尾添加元素, 并返回当前数组
     * @param items 要添加的元素
     * @returns 添加后的数组
     */
    $push(...items: T[]): T[];
    
    /**
     * 从数组末尾移除元素, 并返回当前数组
     * @returns 移除元素后的数组
     */
    $pop(): T[];
    
    /**
     * 从数组开头移除元素, 并返回当前数组
     * @returns 移除元素后的数组
     */
    $shift(): T[];
    
    /**
     * 向数组开头添加元素, 并返回当前数组
     * @param items 要添加的元素
     * @returns 添加后的数组
     */
    $unshift(...items: T[]): T[];
    
    /**
     * 从数组中删除元素并添加新元素, 并返回当前数组
     * @param start 开始位置
     * @param deleteCount 删除数量
     * @param items 要添加的元素
     * @returns 被删除的元素数组
     */
    $splice(start: number, deleteCount?: number, ...items: T[]): T[];
    
    /**
     * 向数组末尾添加元素（返回添加的元素）
     * @param items 要添加的元素
     * @returns 添加后的数组
     */
    $pusha(...items: T[]): T[];
    
    /**
     * 向数组开头添加元素（返回添加的元素）
     * @param items 要添加的元素
     * @returns 添加后的数组
     */
    $unshifta(...items: T[]): T[];
    
    /**
     * 向数组末尾添加元素（返回第一个添加的元素）
     * @param items 要添加的元素
     * @returns 第一个添加的元素
     */
    $push0(...items: T[]): T;
    
    /**
     * 向数组开头添加元素（返回第一个添加的元素）
     * @param items 要添加的元素
     * @returns 第一个添加的元素
     */
    $unshift0(...items: T[]): T;
    
    /**
     * 检查数组是否为空
     * @returns 如果数组为空返回 true，否则返回 false
     */
    $empty(): boolean;
    
    /**
     * 获取数组的第一个元素
     * @param defval 默认值
     * @returns 第一个元素或默认值
     */
    first(defval?: T): T;
    
    /**
     * 获取数组的最后一个元素
     * @param defval 默认值
     * @returns 最后一个元素或默认值
     */
    last(defval?: T): T;
    
    /**
     * 查找数组中的元素
     * @param cb 查找回调函数
     * @param defval 默认值
     * @returns 找到的元素或默认值
     */
    $find(cb: (value: T, index: number, array: T[]) => boolean, defval?: T): T;
    
    /**
     * 比较两个数组是否相等
     * @param a 要比较的数组
     * @returns 如果相等返回 true，否则返回 false
     */
    equals(a: T[]): boolean;
    
    /**
     * 去重数组元素
     * @param cb 比较函数
     * @returns 去重后的新数组
     */
    unique(cb?: (value: T) => any): T[];
    
    /**
     * 遍历数组元素
     * @param cb 遍历回调函数
     * @returns 原数组
     */
    each(cb: (value: T, index: number, array: T[]) => void): T[];
    
    /**
     * 异步遍历数组元素
     * @param cb 异步遍历回调函数
     * @returns  Promise，解析为原数组
     */
    each$async(cb: (value: T, index: number, array: T[]) => Promise<void>): Promise<T[]>;
    
    /**
     * 异步映射数组元素
     * @param cb 异步映射函数
     * @returns  Promise，解析为映射后的新数组
     */
    map$async<U>(cb: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]>;
    
    /**
     * 打乱数组元素
     * @param clone 是否克隆数组
     * @returns 打乱后的数组
     */
    shuffle(clone?: boolean): T[];
    
    /**
     * 计算两个数组的并集
     * @param a 另一个数组
     * @returns 并集数组
     */
    union(a: T[]): T[];
    
    /**
     * 计算两个数组的交集
     * @param a 另一个数组
     * @returns 交集数组
     */
    intersection(a: T[]): T[];
    
    /**
     * 计算两个数组的差集
     * @param a 另一个数组
     * @returns 差集数组
     */
    difference(a: T[]): T[];
    
    /**
     * 计算两个数组的对称差集
     * @param a 另一个数组
     * @returns 对称差集数组
     */
    symmetricDifference(a: T[]): T[];
    
    /**
     * 转换为 Map
     * @param cb 转换函数
     * @returns 转换后的 Map
     */
    toMap(cb?: (value: T, index: number) => [any, any]): Map<any, any>;
    
    /**
     * 转换为 Set
     * @param cb 转换函数
     * @returns 转换后的 Set
     */
    toSet(cb?: (value: T) => any): Set<any>;
    
    /**
     * 转换为 Uint8Array
     * @returns 转换后的 Uint8Array
     */
    toUint8Array(): Uint8Array;
    
    /**
     * 转换为 Base64 字符串
     * @returns Base64 字符串
     */
    toBase64(): string;
    
    /**
     * 转换为十六进制字符串
     * @returns 十六进制字符串
     */
    toHex(): string;
    
    /**
     * 解码字符串
     * @returns 解码后的字符串
     */
    decode(): string;
    
    // assoc
    // toTree
    // $tree2tree
    // $tree$find
    // $tree$each
    // $tree$map
  }

  /**
   * Map 构造函数扩展
   */
  interface MapConstructor {
    /**
     * 创建一个新的 Map 实例
     */
    new<K, V>(): Map<K, V>;
    
    /**
     * 通过迭代器创建一个新的 Map 实例
     * @param iterator 迭代器
     */
    new<K, V>(iterator: Iterator<K, V, V>): Map<K, V>;
  }

  /**
   * Map 实例扩展
   */
  interface Map<K, V> {
    /**
     * 获取 Map 的大小
     * @returns Map 的大小
     */
    $length(): number;
    
    /**
     * 获取 Map 的键值对迭代器
     * @returns 键值对迭代器
     */
    $entries(): IterableIterator<[K, V]>;
    
    /**
     * 获取 Map 的键迭代器
     * @returns 键迭代器
     */
    $keys(): IterableIterator<K>;
    
    /**
     * 获取 Map 的值迭代器
     * @returns 值迭代器
     */
    $values(): IterableIterator<V>;
    
    /**
     * 设置键值对, 并返回当前Map
     * @param key 键
     * @param value 值
     * @returns Map 实例
     */
    $set(key: K, value: V): Map<K, V>;
    
    /**
     * 删除键值对, 并返回当前Map
     * @param key 键
     * @returns Map 实例
     */
    $delete(key: K): Map<K, V>;
    
    /**
     * 设置键值对并返回键值对数组
     * @param key 键
     * @param value 值
     * @returns 键值对数组
     */
    $seta(key: K, value: V): [K, V];
    
    /**
     * 删除键值对并返回键数组
     * @param key 键
     * @returns 键数组
     */
    $deletea(key: K): [K];
    
    /**
     * 设置键值对并返回键
     * @param key 键
     * @param value 值
     * @returns 键
     */
    $set0(key: K, value: V): K;
    
    /**
     * 删除键值对并返回键
     * @param key 键
     * @returns 键
     */
    $delete0(key: K): K;
    
    /**
     * 设置键值对并返回值
     * @param key 键
     * @param value 值
     * @returns 值
     */
    $set1(key: K, value: V): V;
    
    /**
     * 删除键值对并返回值
     * @param key 键
     * @returns 值
     */
    $delete1(key: K): V;
    
    /**
     * 获取值，如果不存在则插入默认值
     * @param key 键
     * @param defval 默认值
     * @returns 值
     */
    $getOrInsert(key: K, defval?: V): V;
    
    /**
     * 获取值，如果不存在则计算并插入
     * @param key 键
     * @param callback 计算函数
     * @returns 值
     */
    $getOrInsertComputed(key: K, callback: (key: K) => V): V;
    
    /**
     * 获取值，如果不存在则返回默认值
     * @param key 键
     * @param defval 默认值或计算函数
     * @returns 值
     */
    $get(key: K, defval?: V | ((key: K) => V)): V;
    
    /**
     * 异步获取值，如果不存在则返回默认值
     * @param key 键
     * @param defval 默认值或异步计算函数
     * @returns Promise，解析为值
     */
    $get$async(key: K, defval?: V | ((key: K) => Promise<V>)): Promise<V>;
    
    /**
     * 转换为对象
     * @returns 转换后的对象
     */
    toObject(): Record<string, V>;
    
    /**
     * 转换为数组
     * @returns 转换后的数组
     */
    toArray(): [K, V][];
    
    /**
     * 转换为 JSON 格式
     * @returns 转换后的数组
     */
    toJSON(): [K, V][];
    
    /**
     * 获取值，如果不存在则插入默认值
     * @param key 键
     * @param defval 默认值
     * @returns 值
     */
    getOrInsert(key: K, defval?: V): V;
    
    /**
     * 获取值，如果不存在则计算并插入
     * @param key 键
     * @param callback 计算函数
     * @returns 值
     */
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
  }

  /**
   * Set 构造函数扩展
   */
  interface SetConstructor {
    /**
     * 创建一个新的 Set 实例
     */
    new<T>(): Set<T>;
    
    /**
     * 通过迭代器创建一个新的 Set 实例
     * @param iterator 迭代器
     */
    new<T>(iterator: Iterator<T, T, T>): Set<T>;
  }

  /**
   * Set 实例扩展
   */
  interface Set<T> {
    /**
     * 获取 Set 的大小
     * @returns Set 的大小
     */
    $length(): number;
    
    /**
     * 获取 Set 的键值对迭代器
     * @returns 键值对迭代器
     */
    $entries(): IterableIterator<[T, T]>;
    
    /**
     * 获取 Set 的键迭代器
     * @returns 键迭代器
     */
    $keys(): IterableIterator<T>;
    
    /**
     * 获取 Set 的值迭代器
     * @returns 值迭代器
     */
    $values(): IterableIterator<T>;
    
    /**
     * 添加元素, 并返回当前Map
     * @param value 值
     * @returns Set 实例
     */
    $add(value: T): Set<T>;
    
    /**
     * 删除元素, 并返回当前Map
     * @param value 值
     * @returns Set 实例
     */
    $delete(value: T): Set<T>;
    
    /**
     * 添加元素并返回元素数组
     * @param value 值
     * @returns 元素数组
     */
    $adda(value: T): [T];
    
    /**
     * 删除元素并返回元素数组
     * @param value 值
     * @returns 元素数组
     */
    $deletea(value: T): [T];
    
    /**
     * 添加元素并返回元素
     * @param value 值
     * @returns 元素
     */
    $add0(value: T): T;
    
    /**
     * 删除元素并返回元素
     * @param value 值
     * @returns 元素
     */
    $delete0(value: T): T;
    
    /**
     * 计算两个 Set 的并集
     * @param s 另一个 Set
     * @returns 并集 Set
     */
    $union(s: Set<T>): Set<T>;
    
    /**
     * 计算两个 Set 的交集
     * @param s 另一个 Set
     * @returns 交集 Set
     */
    $intersection(s: Set<T>): Set<T>;
    
    /**
     * 计算两个 Set 的差集
     * @param s 另一个 Set
     * @returns 差集 Set
     */
    $difference(s: Set<T>): Set<T>;
    
    /**
     * 计算两个 Set 的对称差集
     * @param s 另一个 Set
     * @returns 对称差集 Set
     */
    $symmetricDifference(s: Set<T>): Set<T>;
    
    /**
     * 转换为数组
     * @returns 转换后的数组
     */
    toArray(): T[];
    
    /**
     * 转换为 JSON 格式
     * @returns 转换后的数组
     */
    toJSON(): T[];
  }

  /**
   * Date 构造函数扩展
   */
  interface DateConstructor {
    /**
     * 创建一个新的 Date 实例
     * @param args 构造参数
     */
    new(...args: any[]): Date;
    
    /**
     * 格式化当前日期
     * @param format 格式字符串
     * @returns 格式化后的字符串
     */
    format(format?: string): string;
    
    /**
     * 获取当前时间戳
     * @returns 时间戳
     */
    unix(): number;
    
    /**
     * 从时间戳创建 Date 实例
     * @param time 时间戳
     * @returns Date 实例
     */
    fromUnix(time: number): Date;
    
    /**
     * 日期计算
     * @param opts 计算选项
     * @returns 计算后的 Date 实例
     */
    expr(opts: { y?: number; m?: number; d?: number; h?: number; i?: number; s?: number }): Date;
    
    /**
     * 获取当天的时间范围
     * @returns 时间范围数组 [开始时间戳, 结束时间戳]
     */
    toDayRange(): [number, number];
    
    /**
     * 获取当周的时间范围
     * @returns 时间范围数组 [开始时间戳, 结束时间戳]
     */
    toWeekRange(): [number, number];
    
    /**
     * 获取当月的时间范围
     * @returns 时间范围数组 [开始时间戳, 结束时间戳]
     */
    toMonthRange(): [number, number];
    
    /**
     * 获取当年的时间范围
     * @returns 时间范围数组 [开始时间戳, 结束时间戳]
     */
    toYearRange(): [number, number];
  }

  /**
   * Date 实例扩展
   */
  interface Date {
    /**
     * 格式化日期
     * @param format 格式字符串
     * @returns 格式化后的字符串
     */
    format(format?: string): string;
    
    /**
     * 获取时间戳
     * @returns 时间戳
     */
    unix(): number;
    
    /**
     * 检查是否是闰年
     * @returns 如果是闰年返回 true，否则返回 false
     */
    isLeapYear(): boolean;
    
    /**
     * 获取月份中的天数
     * @returns 月份中的天数
     */
    getMonthDay(): number;
    
    /**
     * 日期计算
     * @param opts 计算选项
     * @returns 计算后的 Date 实例
     */
    expr(opts?: { y?: number; m?: number; d?: number; h?: number; i?: number; s?: number }): Date;
    
    /**
     * 获取开始时间
     * @param n 时间单位
     * @returns 开始时间的 Date 实例
     */
    begin(n?: number): Date;
    
    /**
     * 获取结束时间
     * @param n 时间单位
     * @returns 结束时间的 Date 实例
     */
    end(n?: number): Date;
    
    /**
     * 获取指定周的日期
     * @param n 周数
     * @param dir 方向
     * @returns 计算后的 Date 实例
     */
    week(n?: number, dir?: number): Date;
    
    /**
     * 转换为 JSON 格式
     * @returns 转换后的字符串
     */
    toJSON(): string;
  }

  /**
   * RegExp 实例扩展
   */
  interface RegExp {
    /**
     * 转换为 JSON 格式
     * @returns 转换后的字符串
     */
    toJSON(): string;
  }

  /**
   * Promise 构造函数扩展
   */
  interface PromiseConstructor {
    /**
     * 创建一个通道，包含 Promise、resolve 和 reject 函数
     * @returns 通道数组 [Promise, resolve, reject]
     */
    $channel(): [Promise<any>, (value: any) => void, (reason: any) => void];
    
    /**
     * 创建一个带有解析器的 Promise
     * @returns 包含 promise、resolve 和 reject 的对象
     */
    $withResolvers(): { promise: Promise<any>; resolve: (value: any) => void; reject: (reason: any) => void; };
  }

  /**
   * Promise 实例扩展
   */
  interface Promise<T> {
    /**
     * 尝试执行并捕获错误
     * @returns Promise，解析为 [结果, null] 或 [null, 错误]
     */
    tryCatch(): Promise<[T, null] | [null, any]>;
  }

  /**
   * JSON 扩展
   */
  interface JSON {
    /**
     * 解析 JSON 字符串
     * @param v 要解析的值
     * @param defval 默认值
     * @returns 解析后的对象或默认值
     */
    $parse(v: any, defval?: any): any;
  }

  /**
   * Iterator 扩展
   */
  interface Iterator<T> {
    /**
     * 转换为数组
     * @returns 转换后的数组
     */
    toArray(): T[];
  }

  /**
   * ArrayBuffer 扩展
   */
  interface ArrayBuffer {
    /**
     * 转换为 Uint8Array
     * @returns 转换后的 Uint8Array
     */
    toUint8Array(): Uint8Array;
  }

  /**
   * Uint8Array 构造函数扩展
   */
  interface Uint8ArrayConstructor {
    /**
     * 创建一个新的 Uint8Array 实例
     */
    new(): Uint8Array;
    
    /**
     * 通过长度创建一个新的 Uint8Array 实例
     * @param length 长度
     */
    new(length: number): Uint8Array;
    
    /**
     * 从字符串创建 Uint8Array
     * @param str 字符串
     * @returns 创建的 Uint8Array
     */
    fromString(str: string): Uint8Array;
    
    /**
     * 从十六进制字符串创建 Uint8Array
     * @param str 十六进制字符串
     * @returns 创建的 Uint8Array
     */
    $fromHex(str: string): Uint8Array;
    
    /**
     * 从 Base64 字符串创建 Uint8Array
     * @param str Base64 字符串
     * @returns 创建的 Uint8Array
     */
    $fromBase64(str: string): Uint8Array;
  }

  /**
   * Uint8Array 实例扩展
   */
  interface Uint8Array {
    /**
     * 从字符串设置值
     * @param str 字符串
     * @param targetOffset 目标偏移量
     * @returns 设置后的对象
     */
    setFromString(str: string, targetOffset?: number): Object;
    
    /**
     * 从十六进制字符串设置值
     * @param str 十六进制字符串
     * @param targetOffset 目标偏移量
     * @returns 设置后的对象
     */
    $setFromHex(str: string, targetOffset?: number): Object;
    
    /**
     * 从 Base64 字符串设置值
     * @param str Base64 字符串
     * @param targetOffset 目标偏移量
     * @returns 设置后的对象
     */
    $setFromBase64(str: string, targetOffset?: number): Object;
    
    /**
     * 转换为字符串
     * @returns 转换后的字符串
     */
    toString(): string;
    
    /**
     * 转换为十六进制字符串
     * @returns 十六进制字符串
     */
    $toHex(): string;
    
    /**
     * 转换为 Base64 字符串
     * @returns Base64 字符串
     */
    $toBase64(): string;
    
    /**
     * 转换为数组
     * @returns 转换后的数组
     */
    toArray(): number[];
  }

  /**
   * Math 扩展
   */
  interface Math {
    /**
     * 生成随机字符串
     * @param len 长度
     * @param slen 特殊字符长度
     * @param chars 字符集
     * @param schars 特殊字符集
     * @returns 随机字符串
     */
    randstr(len?: number, slen?: number, chars?: string, schars?: string): string;
    
    /**
     * 生成随机整数
     * @param min 最小值
     * @param max 最大值
     * @returns 随机整数
     */
    randint(min?: number, max?: number): number;
    
    /**
     * 生成递增 ID
     * @returns 递增 ID
     */
    incrid(): number;
    
    /**
     * 生成递增字符串
     * @returns 递增字符串
     */
    incrstr(): string;
    
    /**
     * 生成唯一 ID
     * @param now 时间戳
     * @returns 唯一 ID
     */
    uniqid(now?: number): number;
    
    /**
     * 生成唯一字符串
     * @returns 唯一字符串
     */
    uniqstr(): string;
    
    /**
     * 睡眠指定时间
     * @param duration 持续时间（毫秒）
     * @returns Promise
     */
    sleep(duration: number): Promise<void>;
    
    /**
     * 使用模板
     * @param name 模板名称
     * @returns 模板内容
     */
    useTemplate(name: string): any;
  }

  /**
   * LRU 缓存类
   */
  class LRU<K, V> extends Map<K, V> {
    /**
     * 构造函数
     * @param capacity 容量
     */
    constructor(capacity: number);
    
    /**
     * 获取值
     * @param key 键
     * @returns 值或 undefined
     */
    get(key: K): V | undefined;
    
    /**
     * 获取值，如果不存在则插入默认值
     * @param key 键
     * @param defval 默认值
     * @returns 值
     */
    getOrInsert(key: K, defval: V): V;
    
    /**
     * 获取值，如果不存在则计算并插入
     * @param key 键
     * @param callback 计算函数
     * @returns 值
     */
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
    
    /**
     * 异步获取值，如果不存在则计算并插入
     * @param key 键
     * @param callback 异步计算函数
     * @returns Promise，解析为值
     */
    getOrInsertComputedAsync(key: K, callback: (key: K) => Promise<V>): Promise<V>;
    
    /**
     * 设置键值对
     * @param key 键
     * @param value 值
     * @returns LRU 实例
     */
    set(key: K, value: V): this;
    
    /**
     * 设置键值对（别名）
     * @param key 键
     * @param value 值
     * @returns LRU 实例
     */
    put(key: K, value: V): this;
  }

  /**
   * LRU 构造函数接口
   */
  interface LRUConstructor {
    /**
     * 创建一个新的 LRU 实例
     * @param capacity 容量
     */
    new <K, V>(capacity: number): LRU<K, V>;
  }
}

export {};
