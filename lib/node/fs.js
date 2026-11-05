// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

import fs from 'fs/promises';
import path from 'path';

fs.exists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

fs.mkfiledir = async (filePath) => {
  const dirname = path.dirname(filePath)
  if (!(await fs.exists(dirname))) {
    await fs.mkdir(dirname, { recursive: true, mode: 0o755 });
  }
  return filePath
}

// export default fs;
