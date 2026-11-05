// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

declare module 'fs/promises' {
    function exists(path: string): Promise<boolean>;
    function mkfiledir(path: string): Promise<string>;
}

export {}
