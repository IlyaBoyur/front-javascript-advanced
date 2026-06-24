'use strict';
/*
Сделать с помощью Set уникализацию массива объектов:

[
	{ id: 1, name: “Вася” },
	{ id: 2, name: “Петя” },
	{ id: 1, name: “Вася” },
]
*/
const objArray = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
];

const uniqueIds = new Set();
const objUniqueArray = [];
for (const obj of objArray) {
	if (!uniqueIds.has(obj.id)) {
		uniqueIds.add(obj.id);
		objUniqueArray.push(obj);
	}
}

console.log(objUniqueArray);