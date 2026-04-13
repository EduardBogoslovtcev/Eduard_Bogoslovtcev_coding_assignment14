# Bogoslovtcev Eduard Portfolio Site

This project is a React application built with Create React App.

The application is containerized using Docker and runs a production build served by Nginx.

---

## Requirements

- Docker installed

---

## Build Docker Image

From the root of the project (Eduard_Bogoslovtcev_final_site), run:

docker build -t eduard_bogoslovtcev_final_site .

---

## Run Docker Container

docker run -d -p 5575:5575 --name Eduard_Bogoslovtcev_coding_assignment14 eduard_bogoslovtcev_final_site

---

## Open in Browser

http://localhost:5575

---

## Stop Container

docker stop Eduard_Bogoslovtcev_coding_assignment14
