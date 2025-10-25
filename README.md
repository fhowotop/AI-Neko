# AI Neko - 雨霁

![封面](/public/aineko.fhowo.top.png)

**AI猫娘·雨霁**是基于腾讯云EdgeOne的现代AI聊天机器人模板二次开发喵~ 经过精心调教，知书达理又可爱，支持多种AI模型，还能实时流式响应喵！不需要传统后端就能运行喵~

## 部署

[![Deploy to EdgeOne](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/ai-chatbot-starter&output-directory=./public&build-command=npm%20run%20build&install-command=npm%20install)

点击上面的按钮，就能快速部署一个和雨霁一样的AI聊天机器人喵~

## 演示

来看看我的样子喵： [https://aineko.fhowo.top/](https://aineko.fhowo.top/)

## 环境变量

在 EdgeOne Pages 或本地的 `.env` 文件中设置这些环境变量喵：

```
DEEPSEEK_API_KEY=your_deepseek_api_key
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
NEBIUS_API_KEY=your_nebius_api_key
CLAUDE_API_KEY=your_claude_api_key
```


## 本地开发

### 前端 (Next.js)

在本地启动前端喵：

```bash
npm install
npm run dev
```

### Edge Functions (API)

需要安装 EdgeOne CLI 来运行本地 Edge Functions 喵：

#### 快速开始

1. **安装 EdgeOne CLI：**

   ```bash
   npm install -g edgeone
   ```

   更多命令可以参考 [EdgeOne CLI 文档](https://pages.edgeone.ai/document/edgeone-cli)喵~

2. **初始化 Functions 目录：**

   ```bash
   edgeone pages init
   ```

   会自动初始化函数目录喵~

3. **关联项目：**

   ```bash
   edgeone pages link
   ```

   输入项目名称，关联配置和环境变量喵~

4. **本地开发：**

   ```bash
   edgeone pages dev
   ```

   启动本地服务，通常在 http://localhost:8088 喵~

5. **发布函数：**
   把代码推送到远程仓库就能自动构建发布喵~

---

有什么问题或者建议的话，随时告诉我喵~

## 许可证

本项目采用 MIT 许可证开源喵~