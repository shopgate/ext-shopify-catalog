# Shopgate Connect - Shopify Catalog
[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE.md)
[![Build Status](https://travis-ci.org/shopgate/sgconnect-shopify-catalog.svg?branch=master)](https://travis-ci.org/shopgate/sgconnect-shopify-catalog)

This Shopify extension will request categories and products directly via Shopify Api.

# Usage

## Local Development
To be able to work with this extension, you have to configure credentials that will allow it to connect to Shopify.
Configuration can be done in two ways:
* using a configuration key for a shop in Shopgate - see extension-config.json or
* provide static configuration in extension-config.json - example configuration:


	{
        "version": "0.1.0",
        "id": "@shopgate/shopify-catalog",
        "components": [
        ],
        "configuration": {
            "shopifyShopAlias": {
                "type": "static",
                "destination" : "backend",
                "params": {
                    "value":  "YourAlias"
                }
            },
            "shopifyAccessToken": {
                "type": "static",
                "destination" : "backend",
                "params": {
                    "value":  "YourAccessToken"
                }
            }
        }
    }

    
When configured properly and you start the Platform SDK backend extension/config.json file will be generated. It usually looks like:

	{
		"shopifyShopAlias": "YourAlias",
		"shopifyAccessToken": "YourAccessToken"
	}

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Blank is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE.md) file for more information.
