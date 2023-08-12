import * as React from 'react';

/*コンポーネントを遅延読み込みするヘルパー関数
  使用方法
    const { objectName } = lazyImport(() => import('component_path'), objectName)

  注意点
  lazyImportを行ったコンポーネントはReact.Suspenseでラップする
*/
export function lazyImport<T extends React.ComponentType<any>, I extends {[K2 in K]: T}, K extends keyof I>(
	factory: () => Promise<I>,
	name: K
): I {
	return Object.create({
		[name]: React.lazy(() => factory().then((module) => ({default: module[name]}))),
	});
}
