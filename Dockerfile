# Definition of R&B - Artist Discovery Platform
# Docker container for automated website management

FROM node:18-alpine

# Install Python for automation scripts
RUN apk add --no-cache python3 py3-pip git

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Install Python dependencies for automation
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Expose port for web server
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node healthcheck.js || exit 1

# Start application
CMD ["npm", "start"]
