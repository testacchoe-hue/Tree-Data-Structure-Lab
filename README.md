# Data Structure Tree Lab 🌳🔬

An interactive, responsive, fully optimized computer science laboratory designed to learn, visualize, and practice **Tree Data Structures** in real-time.

Built as a high-density, modern React application powered by **Vite**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Key Features

- 🔭 **Interactive 2D Canvas**: Real-time BST visualization supporting dynamic node Insertion, Deletion, Search, and Random Balanced-ish Tree Generation with symmetrical branch layout coordinates.
- 📺 **DFS/BFS Traversal Player**: Animated highlighting playbacks for **Preorder**, **Inorder**, **Postorder**, and **Level Order** algorithms with custom speed parameters, console event logs, and output queues.
- 📊 **Dynamic Complexity Matrix**: Interactive comparison grid comparing runtime boundaries across Binary Trees, unbalanced BSTs, self-balancing AVL Trees, and Binary Heaps.
- 🎓 **Self-Assessment Quiz**: A robust 10-question multiple-choice questionnaire complete with progress metrics and immediate feedback panels outlining logical explanations.
- 💻 **Syntax-Highlighted Playground**: Instant copyable implementation snippets for tree declarations, insertion, and traversal across 5 languages: **JavaScript**, **Python**, **Java**, **C++**, and **C**.
- 🌓 **Persistent Dark Mode**: Aesthetic layout switching between a sterile, scientific Light Theme and a deep Cosmic slate Dark Theme synced with `localStorage`.
- 📱 **Fluid Responsive Architecture**: Sticky navigation tracks current scroll status. Mobile layout converts to an overlay mobile hamburger drawer.

---

## 📂 Project Structure

```text
tree-lab/
├── index.html                  # HTML5 Entry (SEO optimized)
├── package.json                # Project dependencies and building scripts
├── vite.config.ts              # Vite configurations (Port 3000, alias)
├── src/
│   ├── main.tsx                # App react entry point
│   ├── App.tsx                 # Core page layout and theme orchestrator
│   ├── index.css               # Google Fonts & Tailwind CSS v4 declarations
│   ├── types.ts                # Strict TypeScript structures
│   ├── data.ts                 # Educational datasets and code blocks
│   └── components/
│       ├── Navbar.tsx          # Sticky navigation with theme toggle
│       ├── Hero.tsx            # Captivating greeting & mini-tree simulation
│       ├── AboutTrees.tsx      # Core vocabulary cards (Leaf, Height, etc.)
│       ├── TreeTypesList.tsx   # Detailed cards with interactive search filters
│       ├── TreeOperations.tsx  # Interactive cards explaining core mechanics
│       ├── InteractiveVisualizer.tsx # Master 2D SVG canvas & traversal player
│       ├── TreeTraversalsSection.tsx # Deep-dive traversal patterns
│       ├── ComplexityTable.tsx # Dynamic time complexity hover matrix
│       ├── TreeQuiz.tsx        # Dynamic 10-question CS evaluation
│       ├── ApplicationsSection.tsx # Real-world system implementations
│       ├── FaqSection.tsx      # Accordion FAQs for quick theory review
│       └── Footer.tsx          # Quick links, social handles & ScrollToTop
```

---

## 💻 Local Setup

To run this application locally on your computer:

1. **Clone or Download** the source files.
2. **Install dependencies** using npm:
   ```bash
   npm install
   ```
3. **Boot up the local development server**:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your web browser.

---

## ⚡ Deployment to Vercel

To deploy this project to **Vercel** as a high-speed static educational asset:

1. Connect your repository to **Vercel**.
2. Select **Vite** as your preset template.
3. Configure the following parameters:
   - **Build Command**: `npm run build` (outputs compilation to `/dist`)
   - **Output Directory**: `dist`
4. Click **Deploy**! Vercel will bundle and serve the app on their lightning-fast CDN.

---

## 📋 Browser Compatibility

- Google Chrome (Version 90+)
- Mozilla Firefox (Version 88+)
- Apple Safari (Version 14+)
- Microsoft Edge (Version 90+)
