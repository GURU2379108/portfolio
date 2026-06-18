# Streamlit App Deployment Guide

This guide provides step-by-step instructions for deploying your Python Streamlit applications (such as the Heart Disease Predictor, Emotion Detector, Next Word Predictor, Netflix Recommender, and PDF RAG Chat).

## Prerequisites
1. **GitHub Account:** Ensure your project is pushed to a public or private GitHub repository.
2. **Streamlit Community Cloud Account:** Sign up at [share.streamlit.io](https://share.streamlit.io) using your GitHub account.

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Repository
Ensure your GitHub repository contains the following critical files:
- `app.py` (or the main Python file for your Streamlit app).
- `requirements.txt` (This must list all the dependencies your app needs to run, e.g., `streamlit`, `pandas`, `scikit-learn`, `langchain`, etc.).

### Step 2: Deploy to Streamlit Community Cloud
1. Log in to [Streamlit Community Cloud](https://share.streamlit.io).
2. Click the **"New app"** button.
3. If prompted, authorize Streamlit to access your GitHub repositories.
4. Select the repository containing your project from the "Repository" dropdown (e.g., `GURU2379108/heart-disease-risk`).
5. Set the "Branch" (usually `main` or `master`).
6. Set the "Main file path" to the name of your main python file (e.g., `app.py`).
7. Click **"Deploy!"**.

### Step 3: Handling Secrets (API Keys)
If your app uses API keys (like the PDF RAG Chat using Gemini or Groq keys), you must configure them in Streamlit Secrets:
1. After deployment (or during, by clicking "Advanced settings"), go to the app's settings.
2. Click on **"Secrets"**.
3. Enter your keys in TOML format. For example:
   ```toml
   GROQ_API_KEY = "your-api-key-here"
   GOOGLE_API_KEY = "your-api-key-here"
   ```
4. Click **"Save"**. Your app will automatically reboot and read these secrets via `st.secrets["GROQ_API_KEY"]`.

### Step 4: Update Your Portfolio Links
Once the app is successfully deployed, Streamlit will provide you with a live URL (e.g., `https://your-app-name.streamlit.app`).
Copy this URL and update the `live` field in `portfolio/src/components/Projects.jsx` for the respective project.

## Troubleshooting
- **ModuleNotFoundError:** Ensure the missing module is spelled correctly and listed in your `requirements.txt`.
- **App falls asleep:** Streamlit Community Cloud apps go to sleep after 7 days of inactivity. Simply visit the URL to wake the app up.
