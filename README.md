## 函数定义

```
/********入参定义********/
id(节点的id),
x(圆中心点的 x),
y(圆中心点的 y),
r(圆的半径),
stroke(圆的边的颜色),
stroke-width(圆的线宽),
fill(圆的背景色)




/********增加节点函数********/
create(obj){}
入参obj: {
	x(参数可选),
	y(参数可选),
	r(参数可选),
	stroke(参数可选),
	stroke-width(参数可选),
	fill(参数可选)
}
不输入参数默认生成:{
	x(60),
	y(60),
	r(10),
	stroke(balck),
	stroke-width(1),
	fill(red)
}的节点
控制台输入: operatSvg.create()




/********读取节点函数********/
read(id) {}
输入入参obj: {
	id(参数必填)
}
不输入参数默认返回所有节点的属性
控制台输入: operatSvg.read()




/********更新节点函数********/
update(obj) {}
入参obj: {
	id(必填)
	x(参数可选),
	y(参数可选),
	r(参数可选),
	stroke(参数可选),
	stroke-width(参数可选),
	fill(参数可选)
}
控制台输入: operatSvg.update()




/********删除节点函数********/
delete(id) {}
输入入参obj: {
	id(参数必填)
}
不输入入参默认删除所有节点
控制台输入: operatSvg.delete()
```
