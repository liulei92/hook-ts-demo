## Description


## homepage
Open [https://liulei92.github.io/hook-ts-demo](https://liulei92.github.io/hook-ts-demo)


```
hook-ts-demo

创建
create-React-app --template typescript

eject
yarn eject


增加依赖
node-sass classnames mobx mobx-react react-router-dom

增加依赖
使用antd 4.* yarn add antd
使用normalize-css
使用 dayjs, antd-dayjs-webpack-plugin  A webpack plugin for Day.js替换moments


增加 github actions
.github/workflows/ci.yaml

## 使用github personal access token实现部署

类似于 Google 两步验证中的备用验证码，不过google token是单次生成(可见/查询)使用后销毁，github personal token是单次生成销毁(不可见)多次使用。

依次进入 Settings >> Developer settings >> Personal access tokens，点击 Generate new token

_TOKEN = Njk4MzRjNThjNTlkZGE5MzhmZGFhZWE1YWE4Njg2NzhhNTllZTY5NA==
base64


```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
