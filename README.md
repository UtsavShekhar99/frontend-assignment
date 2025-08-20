# Frontend Assignment 🚀

This project contains two reusable, production-ready components built with **React**, **TypeScript**, **TailwindCSS**, and **Storybook**.  
It demonstrates component reusability, responsive design, accessibility, and clean styling for a frontend assignment.

---

## 📌 Components

### 🔹 InputField
A flexible input component supporting:
- ✅ Label, placeholder, helper text, and error message
- ✅ States: default, disabled, invalid
- ✅ Variants: filled, outlined, ghost
- ✅ Sizes: small, medium, large
- ✅ Clear button functionality
- ✅ Password toggle with eye icon
- ✅ Accessible with `aria-*` attributes
- ✅ Light & dark theme support

### 🔹 DataTable
A reusable data table with:
- ✅ Display of tabular data
- ✅ Column sorting
- ✅ Row selection (single & multiple)
- ✅ Loading state
- ✅ Empty state
- ✅ Accessible with ARIA roles (`row`, `columnheader`, `aria-sort`)

---

## 🛠️ Tech Stack

- **React 18 + TypeScript**
- **TailwindCSS v3**
- **Storybook (with React-Vite)**
- **Heroicons (for password toggle)**
- GitHub for version control & deployment-ready

---

## 📂 Project Structure

frontend-assignment/
## 📂 Project Structure

```plaintext
📂 frontend-assignment
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 DataTable
│   │   │   ├── DataTable.tsx          # DataTable component
│   │   │   └── DataTable.stories.tsx  # Storybook stories for DataTable
│   │   ├── 📂 InputField
│   │   │   ├── InputField.tsx         # InputField component
│   │   │   └── InputField.stories.tsx # Storybook stories for InputField
│   ├── App.tsx                        # Main demo page
│   ├── index.css                      # Global styles
│   └── main.tsx                       # React entry point
│
├── 📂 public                          # Static assets
├── 📂 .storybook                      # Storybook configuration
├── 📂 node_modules                    # Dependencies
├── package.json                       # Project metadata & dependencies
└── README.md                          # Project documentation
