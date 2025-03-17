// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

typeof window !== 'undefined' || require('./index');

const list = [
  { id: 1, pid: 0, name: '女装男装' },
    { id: 4, pid: 1, name: '潮流女装' },
      { id: 13, pid: 4, name: '羽绒服' },
      { id: 14, pid: 4, name: '毛呢大衣' },
      { id: 15, pid: 4, name: '毛衣' },
      { id: 16, pid: 4, name: '冬季外套' },
      { id: 17, pid: 4, name: '新品' },
      { id: 18, pid: 4, name: '裤子' },
      { id: 19, pid: 4, name: '连衣裙' },
      { id: 20, pid: 4, name: '腔调' },
        { id: 100, pid: 20, name: '腔调4' },
    { id: 5, pid: 1, name: '时尚男装' },
      { id: 21, pid: 5, name: '秋冬新品' },
      { id: 22, pid: 5, name: '淘先生' },
      { id: 23, pid: 5, name: '拾货' },
      { id: 24, pid: 5, name: '秋冬外套' },
      { id: 25, pid: 5, name: '时尚套装' },
      { id: 26, pid: 5, name: '潮牌' },
      { id: 27, pid: 5, name: '爸爸装' },
      { id: 28, pid: 5, name: '西装' },
    { id: 6, pid: 1, name: '秋外套' },
      { id: 29, pid: 6, name: '秋款' },
      { id: 30, pid: 6, name: '夹克' },
      { id: 31, pid: 6, name: '卫衣' },
      { id: 32, pid: 6, name: '西装' },
      { id: 33, pid: 6, name: '风衣' },
      { id: 34, pid: 6, name: '皮衣' },
      { id: 35, pid: 6, name: '毛呢外套' },
      { id: 36, pid: 6, name: '薄羽绒' },
  { id: 2, pid: 0, name: '鞋类箱包' },
    { id: 7, pid: 2, name: '女鞋' },
      { id: 37, pid: 7, name: '帆布鞋' },
      { id: 38, pid: 7, name: '高帮' },
      { id: 39, pid: 7, name: '低帮' },
      { id: 40, pid: 7, name: '内增高' },
      { id: 41, pid: 7, name: '懒人鞋' },
      { id: 42, pid: 7, name: '厚底' },
      { id: 43, pid: 7, name: '韩版' },
      { id: 44, pid: 7, name: '系带' },
    { id: 8, pid: 2, name: '潮流女包' },
      { id: 45, pid: 8, name: '上新' },
      { id: 46, pid: 8, name: '人气款' },
      { id: 47, pid: 8, name: '单肩包' },
      { id: 48, pid: 8, name: '斜挎包' },
      { id: 49, pid: 8, name: '手提包' },
      { id: 50, pid: 8, name: '迷你包' },
      { id: 51, pid: 8, name: '手拿包' },
      { id: 52, pid: 8, name: '小方包' },
    { id: 9, pid: 2, name: '帽子' },
      { id: 53, pid: 9, name: '棒球帽' },
      { id: 54, pid: 9, name: '鸭舌帽' },
      { id: 55, pid: 9, name: '遮阳帽' },
      { id: 56, pid: 9, name: '渔夫帽' },
      { id: 57, pid: 9, name: '草帽' },
      { id: 58, pid: 9, name: '平顶帽' },
      { id: 59, pid: 9, name: '嘻哈帽' },
      { id: 60, pid: 9, name: '贝雷帽 ' },
  { id: 3, pid: 0, name: '母婴用品' },
    { id: 10, pid: 3, name: '宝宝奶粉' },
      { id: 61, pid: 10, name: '英国牛栏' },
      { id: 62, pid: 10, name: '英国爱他美' },
      { id: 63, pid: 10, name: '美赞臣' },
      { id: 64, pid: 10, name: '雅培' },
      { id: 65, pid: 10, name: '澳洲爱他美' },
      { id: 66, pid: 10, name: '可瑞康' },
      { id: 67, pid: 10, name: '惠氏' },
      { id: 68, pid: 10, name: '贝因美' },
    { id: 11, pid: 3, name: '婴童用品' },
      { id: 69, pid: 11, name: '推车' },
      { id: 70, pid: 11, name: '驱蚊器' },
      { id: 71, pid: 11, name: '婴儿床' },
      { id: 72, pid: 11, name: '理发器' },
      { id: 73, pid: 11, name: '奶瓶' },
      { id: 74, pid: 11, name: '餐椅' },
      { id: 75, pid: 11, name: '背带腰凳' },
      { id: 76, pid: 11, name: '安全座椅' },
    { id: 12, pid: 3, name: '辅食营养' },
      { id: 77, pid: 12, name: '米粉' },
      { id: 78, pid: 12, name: '肉松' },
      { id: 79, pid: 12, name: '磨牙棒' },
      { id: 80, pid: 12, name: '果泥' },
      { id: 81, pid: 12, name: '益生菌' },
      { id: 82, pid: 12, name: '清火开胃' },
      { id: 83, pid: 12, name: '钙铁锌' },
      { id: 84, pid: 12, name: '维生素' },
];

// console.log(list.toTreeRecursion());
// console.log(list.toTree());

console.log(list.clone0().toTree().treeFind0(v => v.id == 33));
console.log(list.clone0().toTree().treeFind0(v => v.id == 33).getParents0(true, -1));

// console.log(JSON.stringify(list.toTreeRecursion()));
// console.log(JSON.stringify(list.toTree()));

// console.log(JSON.stringify(list.clone0().toTreeRecursion()) === JSON.stringify(list.clone0().toTree()));

// const root = { id: 0 };

// console.log(list.toTreeRecursion(root, root));
// console.log(list.toTree(root, root));

// console.log(JSON.stringify(list.toTreeRecursion(root, root)));
// console.log(JSON.stringify(list.toTree(root, root)));

// console.log(JSON.stringify(list.clone0().toTreeRecursion(root, root)) === JSON.stringify(list.clone0().toTree(root, root)));

// const tree = list.toTree();

// tree.treeEach(v => console.log('  '.repeat(v.level) + v.id));

// tree.treeMap(v => {
//   v.level *= 2;
//   return v;
// }).treeEach(v => console.log('  '.repeat(v.level) + v.id));

// const level0 = list[0];
// const level2 = list[3];

// list.toTreeRecursion();
// list.toTree();

// level0.getChildrens2(false).each(v => console.log('  '.repeat(v.level) + v.id));
// level0.getChildrens2(true).each(v => console.log('  '.repeat(v.level) + v.id));
// level0.getChildrens2(false, 2).each(v => console.log('  '.repeat(v.level) + v.id));
// level0.getChildrens2(true, 2).each(v => console.log('  '.repeat(v.level) + v.id));
// level0.getChildrens2(false, 9).each(v => console.log('  '.repeat(v.level) + v.id));
// level0.getChildrens2(true, 9).each(v => console.log('  '.repeat(v.level) + v.id));

// console.log(level2.getParents2());
// console.log(level2.getParents2(true));
// console.log(level2.getParents2(true, 3));
// console.log(level2.getParents2(true, 3).some(v => v.id == 4));

// const root = { name: '所有分类', list, children: [] };
// root.children = list.toTree(root);
// console.log(root.getChildrens2(false, 100).each(v => console.log('  '.repeat(v.level) + v.id)));
// console.log(root.list.find(v => v.id == 3).getChildrens2());

const tree1 = [
  { id: 1, name: '女装男装', children: [
    { id: 4, name: '潮流女装', children: [
      { id: 13, name: '羽绒服' },
      { id: 14, name: '毛呢大衣' },
      { id: 15, name: '毛衣' },
      { id: 16, name: '冬季外套' },
      { id: 17, name: '新品' },
      { id: 18, name: '裤子' },
      { id: 19, name: '连衣裙' },
      { id: 20, name: '腔调', children: [
        { id: 100, name: '腔调4' },
      ] },
    ] },
    { id: 5, name: '时尚男装', children: [
      { id: 21, name: '秋冬新品' },
      { id: 22, name: '淘先生' },
      { id: 23, name: '拾货' },
      { id: 24, name: '秋冬外套' },
      { id: 25, name: '时尚套装' },
      { id: 26, name: '潮牌' },
      { id: 27, name: '爸爸装' },
      { id: 28, name: '西装' },
    ] },
    { id: 6, name: '秋外套', children: [
      { id: 29, name: '秋款' },
      { id: 30, name: '夹克' },
      { id: 31, name: '卫衣' },
      { id: 32, name: '西装' },
      { id: 33, name: '风衣' },
      { id: 34, name: '皮衣' },
      { id: 35, name: '毛呢外套' },
      { id: 36, name: '薄羽绒' },
    ] },
  ] },
  { id: 2, name: '鞋类箱包', children: [
    { id: 7, name: '女鞋', children: [
      { id: 37, name: '帆布鞋' },
      { id: 38, name: '高帮' },
      { id: 39, name: '低帮' },
      { id: 40, name: '内增高' },
      { id: 41, name: '懒人鞋' },
      { id: 42, name: '厚底' },
      { id: 43, name: '韩版' },
      { id: 44, name: '系带' },
    ] },
    { id: 8, name: '潮流女包', children: [
      { id: 45, name: '上新' },
      { id: 46, name: '人气款' },
      { id: 47, name: '单肩包' },
      { id: 48, name: '斜挎包' },
      { id: 49, name: '手提包' },
      { id: 50, name: '迷你包' },
      { id: 51, name: '手拿包' },
      { id: 52, name: '小方包' },
    ] },
    { id: 9, name: '帽子', children: [
      { id: 53, name: '棒球帽' },
      { id: 54, name: '鸭舌帽' },
      { id: 55, name: '遮阳帽' },
      { id: 56, name: '渔夫帽' },
      { id: 57, name: '草帽' },
      { id: 58, name: '平顶帽' },
      { id: 59, name: '嘻哈帽' },
      { id: 60, name: '贝雷帽 ' },
    ] },
  ] },
  { id: 3, name: '母婴用品', children: [
    { id: 10, name: '宝宝奶粉', children: [
      { id: 61, name: '英国牛栏' },
      { id: 62, name: '英国爱他美' },
      { id: 63, name: '美赞臣' },
      { id: 64, name: '雅培' },
      { id: 65, name: '澳洲爱他美' },
      { id: 66, name: '可瑞康' },
      { id: 67, name: '惠氏' },
      { id: 68, name: '贝因美' },
    ] },
    { id: 11, name: '婴童用品', children: [
      { id: 69, name: '推车' },
      { id: 70, name: '驱蚊器' },
      { id: 71, name: '婴儿床' },
      { id: 72, name: '理发器' },
      { id: 73, name: '奶瓶' },
      { id: 74, name: '餐椅' },
      { id: 75, name: '背带腰凳' },
      { id: 76, name: '安全座椅' },
    ] },
    { id: 12, name: '辅食营养', children: [
      { id: 77, name: '米粉' },
      { id: 78, name: '肉松' },
      { id: 79, name: '磨牙棒' },
      { id: 80, name: '果泥' },
      { id: 81, name: '益生菌' },
      { id: 82, name: '清火开胃' },
      { id: 83, name: '钙铁锌' },
      { id: 84, name: '维生素' },
    ] },
  ] },
];

console.log(tree1.clone0().tree2tree());



console.log(tree1.clone0().tree2tree().treeFind0(v => v.id == 33));
console.log(tree1.clone0().tree2tree().treeFind0(v => v.id == 33).getParents0(true, -1));

const root = { id: 0, name: 'ROOT', level: 0 };
root.children = tree1.clone0().tree2tree(root, root);
console.log(root);
console.log(root.treeFind0(v => v.id == 33));


const l = [
  { id: 1, name: '1', cid: 1, cname: 'a' },
  { id: 2, name: '2', cid: 1, cname: 'a' },
  { id: 3, name: '3', cid: 1, cname: 'a' },
  { id: 4, name: '4', cid: 2, cname: 'b' },
  { id: 5, name: '5', cid: 2, cname: 'b' },
  { id: 6, name: '6', cid: 2, cname: 'b' },
];
console.log(l.toMerge(v => v.cid));
