# Use official Node image to build the React app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /Eduard_Bogoslovtcev_final_site

# Copy package files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the production version
RUN yarn build

# Use a lightweight web server to serve the build
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /Eduard_Bogoslovtcev_final_site/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Configure nginx to use port 5575
RUN sed -i 's/80/5575/g' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]