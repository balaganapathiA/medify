# **AI Recipe Generator 🍪**  

This is an AI-powered recipe generator using **Google Generative AI**, **Node.js**, and **Docker**.

## **🚀 Features**  
- Generates recipe lists based on user input  
- Uses **Express.js** backend with **Google AI API**  
- Fully containerized with **Docker**  

---

## **📌 Setup Instructions**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/ai-recipe-generator.git
cd ai-recipe-generator
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Add `.env` File**  
Create a `.env` file in the root directory and add:  
```env
GEMINI_API_KEY=your-api-key-here
```

### **4️⃣ Run with Docker**  
```bash
docker build -t my-app .
docker run --env-file .env -p 3000:3000 my-app
```
Now, open **[http://localhost:3000](http://localhost:3000)** in your browser.  

---

## **🖼️ Screenshots**  

### **Web App Interface**  
![App Screenshot](https://github.com/user-attachments/assets/e5ca28ae-381c-43d6-a49c-b9fcb2359a8b)  

### **Generated Recipe List Output**  
![Generated Recipes](https://github.com/user-attachments/assets/fe9ca138-4f4f-456c-8f38-e44585c5214d)  

---
