# main.py

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Chào mừng đến với backend Python!"}

@app.get("/hello/{name}")
def say_hello(name: str):
    return {"message": f"Xin chào {name}!"}
