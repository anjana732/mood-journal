# 🌈 Mood Journal

**Mood Journal** is a beautifully designed web application that helps users reflect on their emotional well-being by logging their daily mood. It provides a visual, interactive interface for selecting moods, displays inspirational quotes, and stores a history of mood entries.

---

## 📌 Table of Contents

- [Features](#features)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Core Components](#core-components)
- [Author](#author)

---

## ✅ Features

- 🌤️ **Quote of the Day**: Displays a motivational quote fixed at the top of the screen.
- 🎨 **Emoji Mood Selection**: A collection of mood cards displayed in a responsive grid layout.
- 📖 **Mood History Log**: Displays a card-style list of previously selected moods with timestamps.
- ✨ **Responsive & Adaptive Layout**:
  - Single column layout on smaller screens.
  - Dual-column layout on large screens: Emoji Grid on the left, Mood History on the right.
- 🎯 **Clear History Option**: Allows users to clear their mood history with a single click.

---

## 🔗 Live Preview

> Coming soon 


## 🛠️ Tech Stack

| Category     | Technology                     |
|--------------|---------------------------------|
| Frontend     | React.js (with JSX)             |
| Styling      | Tailwind CSS                    |
| Icons/Fonts  | System Cursive Fonts            |
| State Mgmt   | useState, useEffect             |
| Storage      | Local Storage (browser)         |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ installed
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anjana732/mood-journal.git
   cd mood-journal
   ```
2. Start the Development Server

   ```bash
   npm run dev
   ```
3. Visit the app in your browser at:

   ```bash
   http://localhost:5173
    ```
   
## ⚙️ Core Components

### `QuoteOfTheDay.jsx`
- Fetches and displays a motivational quote.
- Positioned at the top of the screen with a fixed, elegant style.

### `EmojiCard.jsx`
- Represents each mood using emojis and quotes.
- On click, stores today's mood in `localStorage`.

### `TodayMood.jsx`
- Displays previously selected moods in small elevated cards.
- Includes a "Clear History" button aligned at the top-right.



## 🧠 State & Storage

- Utilizes React's `useState()` and `useEffect()` hooks.
- Mood data is stored in `localStorage`, so entries persist across page reloads.

---

## 👩‍💻 Author

**Anjana Kumari**  
Passionate Full Stack Developer from India 🇮🇳

- 💻 Exploring real-world web development  
- 🔗 Reach me on [LinkedIn](https://www.linkedin.com/in/anjana732) 

