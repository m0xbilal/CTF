#!/bin/bash

exec python3 /var/www/html/main_app.py &
exec python3 /var/www/html/hidden_app.py
