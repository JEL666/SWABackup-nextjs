실행 yarn dev

# Install

npx create-next-app@latest --typescript

yarn add @emotion/react

.babelrc 파일을 만든 후 아래의 내용을 붙여넣기 (이것은 안해도 상관없어보임)

{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}

yarn add @emotion/css @emotion/styled

npx sb init