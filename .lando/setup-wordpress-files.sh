#!/bin/sh

cd /react-frontend-demo/.lando
if [ ! -d "wordpress" ]; then
    echo "Downloading WordPress on $LANDO_SERVICE_NAME ..."
    curl -O https://wordpress.org/latest.tar.gz
    tar -xzf latest.tar.gz
    rm latest.tar.gz
    echo "Done downloading WordPress on $LANDO_SERVICE_NAME ..."
fi

echo "Setting up WordPress on $LANDO_SERVICE_NAME ..."
rm -rf /wordpress
cp -r /react-frontend-demo/.lando/wordpress /
chown -R www-data:dialout /wordpress

rm -rf /wordpress/wp-content/plugins/react-frontend-demo
rm -rf /wordpress/wp-config.php
ln -s /react-frontend-demo/.lando/wp-config.php /wordpress/wp-config.php
ln -s /react-frontend-demo /wordpress/wp-content/plugins/react-frontend-demo
echo "Done setting up WordPress on $LANDO_SERVICE_NAME ..."

cd /react-frontend-demo/