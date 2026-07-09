# DEV TINDER Front End

- create a Vite + React application
- Make it as git Repository
- Remove unnecessary codes and files
- Install Tailwind CSS
- Install DaisyUI
- Add NavBar components to App.jsx 
- create NavBar.jsx seperate File
- setting up routing
- Install React-router-create BrowserRouter->Routes->Route =/Body ->Body Route Children
- create an Outlet on your body component
- create a footer
- create Login page component
- Install axioms for calling backend API's
- Install CORS in backend => add middleware along with confiurations: origin, credentials:true
- Whenever you're making API call , make sure to pass axios  with =>{withCredentials: true }
- Intsall Redux-ToolKit 
- Install redux-react + @reduxjs/toolkit =>  configureStore =>Provider [provide the configured store with Provider] =? createSlice

- Login and see if the data is comming into the redux store properly 
- Navbar should update as soon the user Logs In
- you should not access the other routes without login
- If token is not present , redirect user to login page



# Deployment

- signUp on AWS Account
- Launch instance
- chmod 400 <secret.pem>
- ssh -i "devTinder-key.pem" ubuntu@ec2-3-27-46-211.ap-southeast-2.compute.amazonaws.com   =>  connected to the machine using this ssh command
- Install Node version
- git clone frontend and backend

-FRONTEND
    - npm install -> dependencies installing
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port: 80 of your instance

- BackEnd
    - DB password updated
    - Allowed EC2 instance public IP on MongoDB server
    - npm install pm2 -g
    - pm2 start npm -- start
    - pm2 logs,
    - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
    - congif nginx = sudo nano /etc/nginx/sites-available/default
    - restart nginx => sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to /api

    FrontEnd => http://3.27.46.211/
    BackEnd => http://3.27.46.211:7777/

    FrontEnd = devtinder.com 
    backend =  devtinder.com:7777 => devtinder/api

    nginx config

    location /api {
        proxy_pass http://127.0.0.1:7777;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }