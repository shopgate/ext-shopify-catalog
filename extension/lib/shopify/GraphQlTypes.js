const Boolean = {
  'name': 'Boolean',
  'kind': 'SCALAR'
}

const String = {
  'name': 'String',
  'kind': 'SCALAR'
}

const __Type = {
  'name': '__Type',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'description': 'String',
    'enumValues': '__EnumValue',
    'fields': '__Field',
    'inputFields': '__InputValue',
    'interfaces': '__Type',
    'kind': '__TypeKind',
    'name': 'String',
    'ofType': '__Type',
    'possibleTypes': '__Type'
  },
  'implementsNode': false
}

const __TypeKind = {
  'name': '__TypeKind',
  'kind': 'ENUM'
}

const __Field = {
  'name': '__Field',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'accessRestrictedReason': 'String',
    'args': '__InputValue',
    'deprecationReason': 'String',
    'description': 'String',
    'isAccessRestricted': 'Boolean',
    'isDeprecated': 'Boolean',
    'name': 'String',
    'type': '__Type'
  },
  'implementsNode': false
}

const __InputValue = {
  'name': '__InputValue',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'defaultValue': 'String',
    'description': 'String',
    'name': 'String',
    'type': '__Type'
  },
  'implementsNode': false
}

const __EnumValue = {
  'name': '__EnumValue',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'deprecationReason': 'String',
    'description': 'String',
    'isDeprecated': 'Boolean',
    'name': 'String'
  },
  'implementsNode': false
}

const QueryRoot = {
  'name': 'QueryRoot',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'node': 'Node',
    'nodes': 'Node',
    'shop': 'Shop'
  },
  'implementsNode': false
}

const Node = {
  'name': 'Node',
  'kind': 'INTERFACE',
  'fieldBaseTypes': {
    'id': 'ID'
  },
  'possibleTypes': ['AppliedGiftCard', 'Article', 'Blog', 'Checkout', 'CheckoutLineItem', 'Collection', 'Comment', 'MailingAddress', 'Order', 'Payment', 'Product', 'ProductOption', 'ProductVariant', 'ShopPolicy']
}

const ID = {
  'name': 'ID',
  'kind': 'SCALAR'
}

const Customer = {
  'name': 'Customer',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'acceptsMarketing': 'Boolean',
    'addresses': 'MailingAddressConnection',
    'createdAt': 'DateTime',
    'defaultAddress': 'MailingAddress',
    'displayName': 'String',
    'email': 'String',
    'firstName': 'String',
    'id': 'ID',
    'lastName': 'String',
    'orders': 'OrderConnection',
    'phone': 'String',
    'updatedAt': 'DateTime'
  },
  'implementsNode': false
}

const DateTime = {
  'name': 'DateTime',
  'kind': 'SCALAR'
}

const MailingAddress = {
  'name': 'MailingAddress',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'address1': 'String',
    'address2': 'String',
    'city': 'String',
    'company': 'String',
    'country': 'String',
    'countryCode': 'String',
    'firstName': 'String',
    'formatted': 'String',
    'formattedArea': 'String',
    'id': 'ID',
    'lastName': 'String',
    'latitude': 'Float',
    'longitude': 'Float',
    'name': 'String',
    'phone': 'String',
    'province': 'String',
    'provinceCode': 'String',
    'zip': 'String'
  },
  'implementsNode': true
}

const Float = {
  'name': 'Float',
  'kind': 'SCALAR'
}

const MailingAddressConnection = {
  'name': 'MailingAddressConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'MailingAddressEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const PageInfo = {
  'name': 'PageInfo',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'hasNextPage': 'Boolean',
    'hasPreviousPage': 'Boolean'
  },
  'implementsNode': false
}

const MailingAddressEdge = {
  'name': 'MailingAddressEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'MailingAddress'
  },
  'implementsNode': false
}

const Int = {
  'name': 'Int',
  'kind': 'SCALAR'
}

const OrderConnection = {
  'name': 'OrderConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'OrderEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const OrderEdge = {
  'name': 'OrderEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Order'
  },
  'implementsNode': false
}

const Order = {
  'name': 'Order',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'currencyCode': 'CurrencyCode',
    'customerLocale': 'String',
    'customerUrl': 'URL',
    'email': 'String',
    'id': 'ID',
    'lineItems': 'OrderLineItemConnection',
    'orderNumber': 'Int',
    'phone': 'String',
    'processedAt': 'DateTime',
    'shippingAddress': 'MailingAddress',
    'subtotalPrice': 'Money',
    'totalPrice': 'Money',
    'totalRefunded': 'Money',
    'totalShippingPrice': 'Money',
    'totalTax': 'Money'
  },
  'implementsNode': true
}

const Money = {
  'name': 'Money',
  'kind': 'SCALAR'
}

const CurrencyCode = {
  'name': 'CurrencyCode',
  'kind': 'ENUM'
}

const URL = {
  'name': 'URL',
  'kind': 'SCALAR'
}

const OrderLineItemConnection = {
  'name': 'OrderLineItemConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'OrderLineItemEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const OrderLineItemEdge = {
  'name': 'OrderLineItemEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'OrderLineItem'
  },
  'implementsNode': false
}

const OrderLineItem = {
  'name': 'OrderLineItem',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customAttributes': 'Attribute',
    'quantity': 'Int',
    'title': 'String',
    'variant': 'ProductVariant'
  },
  'implementsNode': false
}

const ProductVariant = {
  'name': 'ProductVariant',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'available': 'Boolean',
    'availableForSale': 'Boolean',
    'compareAtPrice': 'Money',
    'id': 'ID',
    'image': 'Image',
    'price': 'Money',
    'product': 'Product',
    'selectedOptions': 'SelectedOption',
    'sku': 'String',
    'title': 'String',
    'weight': 'Float',
    'weightUnit': 'WeightUnit'
  },
  'implementsNode': true
}

const WeightUnit = {
  'name': 'WeightUnit',
  'kind': 'ENUM'
}

const Image = {
  'name': 'Image',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'altText': 'String',
    'id': 'ID',
    'originalSrc': 'URL',
    'src': 'URL',
    'transformedSrc': 'URL'
  },
  'implementsNode': false
}

const CropRegion = {
  'name': 'CropRegion',
  'kind': 'ENUM'
}

const ImageContentType = {
  'name': 'ImageContentType',
  'kind': 'ENUM'
}

const SelectedOption = {
  'name': 'SelectedOption',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'name': 'String',
    'value': 'String'
  },
  'implementsNode': false
}

const Product = {
  'name': 'Product',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'collections': 'CollectionConnection',
    'createdAt': 'DateTime',
    'description': 'String',
    'descriptionHtml': 'HTML',
    'handle': 'String',
    'id': 'ID',
    'images': 'ImageConnection',
    'onlineStoreUrl': 'URL',
    'options': 'ProductOption',
    'productType': 'String',
    'publishedAt': 'DateTime',
    'tags': 'String',
    'title': 'String',
    'updatedAt': 'DateTime',
    'variantBySelectedOptions': 'ProductVariant',
    'variants': 'ProductVariantConnection',
    'vendor': 'String'
  },
  'implementsNode': true
}

const CollectionConnection = {
  'name': 'CollectionConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'CollectionEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const CollectionEdge = {
  'name': 'CollectionEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Collection'
  },
  'implementsNode': false
}

const Collection = {
  'name': 'Collection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'description': 'String',
    'descriptionHtml': 'HTML',
    'handle': 'String',
    'id': 'ID',
    'image': 'Image',
    'products': 'ProductConnection',
    'title': 'String',
    'updatedAt': 'DateTime'
  },
  'implementsNode': true
}

const HTML = {
  'name': 'HTML',
  'kind': 'SCALAR'
}

const ProductConnection = {
  'name': 'ProductConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'ProductEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const ProductEdge = {
  'name': 'ProductEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Product'
  },
  'implementsNode': false
}

const ProductCollectionSortKeys = {
  'name': 'ProductCollectionSortKeys',
  'kind': 'ENUM'
}

const ImageConnection = {
  'name': 'ImageConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'ImageEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const ImageEdge = {
  'name': 'ImageEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Image'
  },
  'implementsNode': false
}

const ProductImageSortKeys = {
  'name': 'ProductImageSortKeys',
  'kind': 'ENUM'
}

const SelectedOptionInput = {
  'name': 'SelectedOptionInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'name': 'String',
    'value': 'String'
  }
}

const ProductOption = {
  'name': 'ProductOption',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'id': 'ID',
    'name': 'String',
    'values': 'String'
  },
  'implementsNode': true
}

const ProductVariantConnection = {
  'name': 'ProductVariantConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'ProductVariantEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const ProductVariantEdge = {
  'name': 'ProductVariantEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'ProductVariant'
  },
  'implementsNode': false
}

const ProductVariantSortKeys = {
  'name': 'ProductVariantSortKeys',
  'kind': 'ENUM'
}

const Attribute = {
  'name': 'Attribute',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'key': 'String',
    'value': 'String'
  },
  'implementsNode': false
}

const OrderSortKeys = {
  'name': 'OrderSortKeys',
  'kind': 'ENUM'
}

const Shop = {
  'name': 'Shop',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'articles': 'ArticleConnection',
    'blogs': 'BlogConnection',
    'cardVaultUrl': 'URL',
    'collectionByHandle': 'Collection',
    'collections': 'CollectionConnection',
    'currencyCode': 'CurrencyCode',
    'description': 'String',
    'moneyFormat': 'String',
    'name': 'String',
    'paymentSettings': 'PaymentSettings',
    'primaryDomain': 'Domain',
    'privacyPolicy': 'ShopPolicy',
    'productByHandle': 'Product',
    'productTypes': 'StringConnection',
    'products': 'ProductConnection',
    'refundPolicy': 'ShopPolicy',
    'shopifyPaymentsAccountId': 'String',
    'termsOfService': 'ShopPolicy'
  },
  'implementsNode': false
}

const PaymentSettings = {
  'name': 'PaymentSettings',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'acceptedCardBrands': 'CardBrand',
    'cardVaultUrl': 'URL',
    'countryCode': 'CountryCode',
    'currencyCode': 'CurrencyCode',
    'shopifyPaymentsAccountId': 'String',
    'supportedDigitalWallets': 'DigitalWallet'
  },
  'implementsNode': false
}

const CountryCode = {
  'name': 'CountryCode',
  'kind': 'ENUM'
}

const CardBrand = {
  'name': 'CardBrand',
  'kind': 'ENUM'
}

const DigitalWallet = {
  'name': 'DigitalWallet',
  'kind': 'ENUM'
}

const Domain = {
  'name': 'Domain',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'host': 'String',
    'sslEnabled': 'Boolean',
    'url': 'URL'
  },
  'implementsNode': false
}

const ShopPolicy = {
  'name': 'ShopPolicy',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'body': 'String',
    'id': 'ID',
    'title': 'String',
    'url': 'URL'
  },
  'implementsNode': true
}

const BlogConnection = {
  'name': 'BlogConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'BlogEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const BlogEdge = {
  'name': 'BlogEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Blog'
  },
  'implementsNode': false
}

const Blog = {
  'name': 'Blog',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'articles': 'ArticleConnection',
    'id': 'ID',
    'title': 'String',
    'url': 'URL'
  },
  'implementsNode': true
}

const ArticleConnection = {
  'name': 'ArticleConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'ArticleEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const ArticleEdge = {
  'name': 'ArticleEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Article'
  },
  'implementsNode': false
}

const Article = {
  'name': 'Article',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'author': 'ArticleAuthor',
    'blog': 'Blog',
    'comments': 'CommentConnection',
    'content': 'String',
    'contentHtml': 'HTML',
    'excerpt': 'String',
    'excerptHtml': 'HTML',
    'id': 'ID',
    'image': 'Image',
    'publishedAt': 'DateTime',
    'tags': 'String',
    'title': 'String',
    'url': 'URL'
  },
  'implementsNode': true
}

const ArticleAuthor = {
  'name': 'ArticleAuthor',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'bio': 'String',
    'email': 'String',
    'firstName': 'String',
    'lastName': 'String',
    'name': 'String'
  },
  'implementsNode': false
}

const CommentConnection = {
  'name': 'CommentConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'CommentEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const CommentEdge = {
  'name': 'CommentEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'Comment'
  },
  'implementsNode': false
}

const Comment = {
  'name': 'Comment',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'author': 'CommentAuthor',
    'content': 'String',
    'contentHtml': 'HTML',
    'id': 'ID'
  },
  'implementsNode': true
}

const CommentAuthor = {
  'name': 'CommentAuthor',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'email': 'String',
    'name': 'String'
  },
  'implementsNode': false
}

const BlogSortKeys = {
  'name': 'BlogSortKeys',
  'kind': 'ENUM'
}

const ArticleSortKeys = {
  'name': 'ArticleSortKeys',
  'kind': 'ENUM'
}

const CollectionSortKeys = {
  'name': 'CollectionSortKeys',
  'kind': 'ENUM'
}

const ProductSortKeys = {
  'name': 'ProductSortKeys',
  'kind': 'ENUM'
}

const StringConnection = {
  'name': 'StringConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'StringEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const StringEdge = {
  'name': 'StringEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'String'
  },
  'implementsNode': false
}

const Mutation = {
  'name': 'Mutation',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkoutAttributesUpdate': 'CheckoutAttributesUpdatePayload',
    'checkoutCompleteFree': 'CheckoutCompleteFreePayload',
    'checkoutCompleteWithCreditCard': 'CheckoutCompleteWithCreditCardPayload',
    'checkoutCompleteWithTokenizedPayment': 'CheckoutCompleteWithTokenizedPaymentPayload',
    'checkoutCreate': 'CheckoutCreatePayload',
    'checkoutCustomerAssociate': 'CheckoutCustomerAssociatePayload',
    'checkoutCustomerDisassociate': 'CheckoutCustomerDisassociatePayload',
    'checkoutDiscountCodeApply': 'CheckoutDiscountCodeApplyPayload',
    'checkoutEmailUpdate': 'CheckoutEmailUpdatePayload',
    'checkoutGiftCardApply': 'CheckoutGiftCardApplyPayload',
    'checkoutGiftCardRemove': 'CheckoutGiftCardRemovePayload',
    'checkoutLineItemsAdd': 'CheckoutLineItemsAddPayload',
    'checkoutLineItemsRemove': 'CheckoutLineItemsRemovePayload',
    'checkoutLineItemsUpdate': 'CheckoutLineItemsUpdatePayload',
    'checkoutShippingAddressUpdate': 'CheckoutShippingAddressUpdatePayload',
    'checkoutShippingLineUpdate': 'CheckoutShippingLineUpdatePayload',
    'customerAccessTokenCreate': 'CustomerAccessTokenCreatePayload',
    'customerAccessTokenDelete': 'CustomerAccessTokenDeletePayload',
    'customerAccessTokenRenew': 'CustomerAccessTokenRenewPayload',
    'customerActivate': 'CustomerActivatePayload',
    'customerAddressCreate': 'CustomerAddressCreatePayload',
    'customerAddressDelete': 'CustomerAddressDeletePayload',
    'customerAddressUpdate': 'CustomerAddressUpdatePayload',
    'customerCreate': 'CustomerCreatePayload',
    'customerDefaultAddressUpdate': 'CustomerDefaultAddressUpdatePayload',
    'customerRecover': 'CustomerRecoverPayload',
    'customerReset': 'CustomerResetPayload',
    'customerUpdate': 'CustomerUpdatePayload'
  },
  'implementsNode': false,
  'relayInputObjectBaseTypes': {
    'checkoutAttributesUpdate': 'CheckoutAttributesUpdateInput',
    'checkoutCreate': 'CheckoutCreateInput',
    'customerAccessTokenCreate': 'CustomerAccessTokenCreateInput',
    'customerActivate': 'CustomerActivateInput',
    'customerCreate': 'CustomerCreateInput',
    'customerReset': 'CustomerResetInput'
  }
}

const CheckoutAttributesUpdatePayload = {
  'name': 'CheckoutAttributesUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const UserError = {
  'name': 'UserError',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'field': 'String',
    'message': 'String'
  },
  'implementsNode': false
}

const Checkout = {
  'name': 'Checkout',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'appliedGiftCards': 'AppliedGiftCard',
    'availableShippingRates': 'AvailableShippingRates',
    'completedAt': 'DateTime',
    'createdAt': 'DateTime',
    'currencyCode': 'CurrencyCode',
    'customAttributes': 'Attribute',
    'customer': 'Customer',
    'email': 'String',
    'id': 'ID',
    'lineItems': 'CheckoutLineItemConnection',
    'note': 'String',
    'order': 'Order',
    'orderStatusUrl': 'URL',
    'paymentDue': 'Money',
    'ready': 'Boolean',
    'requiresShipping': 'Boolean',
    'shippingAddress': 'MailingAddress',
    'shippingLine': 'ShippingRate',
    'subtotalPrice': 'Money',
    'taxExempt': 'Boolean',
    'taxesIncluded': 'Boolean',
    'totalPrice': 'Money',
    'totalTax': 'Money',
    'updatedAt': 'DateTime',
    'webUrl': 'URL'
  },
  'implementsNode': true
}

const CheckoutLineItemConnection = {
  'name': 'CheckoutLineItemConnection',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'edges': 'CheckoutLineItemEdge',
    'pageInfo': 'PageInfo'
  },
  'implementsNode': false
}

const CheckoutLineItemEdge = {
  'name': 'CheckoutLineItemEdge',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'cursor': 'String',
    'node': 'CheckoutLineItem'
  },
  'implementsNode': false
}

const CheckoutLineItem = {
  'name': 'CheckoutLineItem',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customAttributes': 'Attribute',
    'id': 'ID',
    'quantity': 'Int',
    'title': 'String',
    'variant': 'ProductVariant'
  },
  'implementsNode': true
}

const ShippingRate = {
  'name': 'ShippingRate',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'handle': 'String',
    'price': 'Money',
    'title': 'String'
  },
  'implementsNode': false
}

const AvailableShippingRates = {
  'name': 'AvailableShippingRates',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'ready': 'Boolean',
    'shippingRates': 'ShippingRate'
  },
  'implementsNode': false
}

const AppliedGiftCard = {
  'name': 'AppliedGiftCard',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'amountUsed': 'Money',
    'balance': 'Money',
    'id': 'ID',
    'lastCharacters': 'String'
  },
  'implementsNode': true
}

const CheckoutAttributesUpdateInput = {
  'name': 'CheckoutAttributesUpdateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'note': 'String',
    'customAttributes': 'AttributeInput',
    'allowPartialAddresses': 'Boolean'
  }
}

const AttributeInput = {
  'name': 'AttributeInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'key': 'String',
    'value': 'String'
  }
}

const CheckoutCompleteFreePayload = {
  'name': 'CheckoutCompleteFreePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutCompleteWithCreditCardPayload = {
  'name': 'CheckoutCompleteWithCreditCardPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'payment': 'Payment',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const Payment = {
  'name': 'Payment',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'amount': 'Money',
    'billingAddress': 'MailingAddress',
    'checkout': 'Checkout',
    'creditCard': 'CreditCard',
    'errorMessage': 'String',
    'id': 'ID',
    'idempotencyKey': 'String',
    'ready': 'Boolean',
    'test': 'Boolean',
    'transaction': 'Transaction'
  },
  'implementsNode': true
}

const CreditCard = {
  'name': 'CreditCard',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'brand': 'String',
    'expiryMonth': 'Int',
    'expiryYear': 'Int',
    'firstDigits': 'String',
    'firstName': 'String',
    'lastDigits': 'String',
    'lastName': 'String',
    'maskedNumber': 'String'
  },
  'implementsNode': false
}

const Transaction = {
  'name': 'Transaction',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'amount': 'Money',
    'kind': 'TransactionKind',
    'status': 'TransactionStatus',
    'test': 'Boolean'
  },
  'implementsNode': false
}

const TransactionKind = {
  'name': 'TransactionKind',
  'kind': 'ENUM'
}

const TransactionStatus = {
  'name': 'TransactionStatus',
  'kind': 'ENUM'
}

const CreditCardPaymentInput = {
  'name': 'CreditCardPaymentInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'amount': 'Money',
    'idempotencyKey': 'String',
    'billingAddress': 'MailingAddressInput',
    'vaultId': 'String',
    'test': 'Boolean'
  }
}

const MailingAddressInput = {
  'name': 'MailingAddressInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'address1': 'String',
    'address2': 'String',
    'city': 'String',
    'company': 'String',
    'country': 'String',
    'firstName': 'String',
    'lastName': 'String',
    'phone': 'String',
    'province': 'String',
    'zip': 'String'
  }
}

const CheckoutCompleteWithTokenizedPaymentPayload = {
  'name': 'CheckoutCompleteWithTokenizedPaymentPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'payment': 'Payment',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const TokenizedPaymentInput = {
  'name': 'TokenizedPaymentInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'amount': 'Money',
    'idempotencyKey': 'String',
    'billingAddress': 'MailingAddressInput',
    'type': 'String',
    'paymentData': 'String',
    'test': 'Boolean',
    'identifier': 'String'
  }
}

const CheckoutCreatePayload = {
  'name': 'CheckoutCreatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutCreateInput = {
  'name': 'CheckoutCreateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'email': 'String',
    'lineItems': 'CheckoutLineItemInput',
    'shippingAddress': 'MailingAddressInput',
    'note': 'String',
    'customAttributes': 'AttributeInput',
    'allowPartialAddresses': 'Boolean'
  }
}

const CheckoutLineItemInput = {
  'name': 'CheckoutLineItemInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'customAttributes': 'AttributeInput',
    'quantity': 'Int',
    'variantId': 'ID'
  }
}

const CheckoutCustomerAssociatePayload = {
  'name': 'CheckoutCustomerAssociatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutCustomerDisassociatePayload = {
  'name': 'CheckoutCustomerDisassociatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutDiscountCodeApplyPayload = {
  'name': 'CheckoutDiscountCodeApplyPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutEmailUpdatePayload = {
  'name': 'CheckoutEmailUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutGiftCardApplyPayload = {
  'name': 'CheckoutGiftCardApplyPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutGiftCardRemovePayload = {
  'name': 'CheckoutGiftCardRemovePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutLineItemsAddPayload = {
  'name': 'CheckoutLineItemsAddPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutLineItemsRemovePayload = {
  'name': 'CheckoutLineItemsRemovePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutLineItemsUpdatePayload = {
  'name': 'CheckoutLineItemsUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutLineItemUpdateInput = {
  'name': 'CheckoutLineItemUpdateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'id': 'ID',
    'variantId': 'ID',
    'quantity': 'Int',
    'customAttributes': 'AttributeInput'
  }
}

const CheckoutShippingAddressUpdatePayload = {
  'name': 'CheckoutShippingAddressUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CheckoutShippingLineUpdatePayload = {
  'name': 'CheckoutShippingLineUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'checkout': 'Checkout',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerAccessTokenCreatePayload = {
  'name': 'CustomerAccessTokenCreatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customerAccessToken': 'CustomerAccessToken',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerAccessToken = {
  'name': 'CustomerAccessToken',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'accessToken': 'String',
    'expiresAt': 'DateTime'
  },
  'implementsNode': false
}

const CustomerAccessTokenCreateInput = {
  'name': 'CustomerAccessTokenCreateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'email': 'String',
    'password': 'String'
  }
}

const CustomerAccessTokenDeletePayload = {
  'name': 'CustomerAccessTokenDeletePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'deletedAccessToken': 'String',
    'deletedCustomerAccessTokenId': 'String',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerAccessTokenRenewPayload = {
  'name': 'CustomerAccessTokenRenewPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customerAccessToken': 'CustomerAccessToken',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerActivatePayload = {
  'name': 'CustomerActivatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerActivateInput = {
  'name': 'CustomerActivateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'activationToken': 'String',
    'password': 'String'
  }
}

const CustomerAddressCreatePayload = {
  'name': 'CustomerAddressCreatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customerAddress': 'MailingAddress',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerAddressDeletePayload = {
  'name': 'CustomerAddressDeletePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'deletedCustomerAddressId': 'String',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerAddressUpdatePayload = {
  'name': 'CustomerAddressUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customerAddress': 'MailingAddress',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerCreatePayload = {
  'name': 'CustomerCreatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerCreateInput = {
  'name': 'CustomerCreateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'firstName': 'String',
    'lastName': 'String',
    'email': 'String',
    'phone': 'String',
    'password': 'String',
    'acceptsMarketing': 'Boolean'
  }
}

const CustomerDefaultAddressUpdatePayload = {
  'name': 'CustomerDefaultAddressUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerRecoverPayload = {
  'name': 'CustomerRecoverPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerResetPayload = {
  'name': 'CustomerResetPayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerResetInput = {
  'name': 'CustomerResetInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'resetToken': 'String',
    'password': 'String'
  }
}

const CustomerUpdatePayload = {
  'name': 'CustomerUpdatePayload',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'customer': 'Customer',
    'customerAccessToken': 'CustomerAccessToken',
    'userErrors': 'UserError'
  },
  'implementsNode': false
}

const CustomerUpdateInput = {
  'name': 'CustomerUpdateInput',
  'kind': 'INPUT_OBJECT',
  'inputFieldBaseTypes': {
    'firstName': 'String',
    'lastName': 'String',
    'email': 'String',
    'phone': 'String',
    'password': 'String',
    'acceptsMarketing': 'Boolean'
  }
}

const __Schema = {
  'name': '__Schema',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'directives': '__Directive',
    'mutationType': '__Type',
    'queryType': '__Type',
    'subscriptionType': '__Type',
    'types': '__Type'
  },
  'implementsNode': false
}

const __Directive = {
  'name': '__Directive',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'args': '__InputValue',
    'description': 'String',
    'locations': '__DirectiveLocation',
    'name': 'String',
    'onField': 'Boolean',
    'onFragment': 'Boolean',
    'onOperation': 'Boolean'
  },
  'implementsNode': false
}

const __DirectiveLocation = {
  'name': '__DirectiveLocation',
  'kind': 'ENUM'
}

const Types = {
  types: {}
}
Types.types['Boolean'] = Boolean
Types.types['String'] = String
Types.types['__Type'] = __Type
Types.types['__TypeKind'] = __TypeKind
Types.types['__Field'] = __Field
Types.types['__InputValue'] = __InputValue
Types.types['__EnumValue'] = __EnumValue
Types.types['QueryRoot'] = QueryRoot
Types.types['Node'] = Node
Types.types['ID'] = ID
Types.types['Customer'] = Customer
Types.types['DateTime'] = DateTime
Types.types['MailingAddress'] = MailingAddress
Types.types['Float'] = Float
Types.types['MailingAddressConnection'] = MailingAddressConnection
Types.types['PageInfo'] = PageInfo
Types.types['MailingAddressEdge'] = MailingAddressEdge
Types.types['Int'] = Int
Types.types['OrderConnection'] = OrderConnection
Types.types['OrderEdge'] = OrderEdge
Types.types['Order'] = Order
Types.types['Money'] = Money
Types.types['CurrencyCode'] = CurrencyCode
Types.types['URL'] = URL
Types.types['OrderLineItemConnection'] = OrderLineItemConnection
Types.types['OrderLineItemEdge'] = OrderLineItemEdge
Types.types['OrderLineItem'] = OrderLineItem
Types.types['ProductVariant'] = ProductVariant
Types.types['WeightUnit'] = WeightUnit
Types.types['Image'] = Image
Types.types['CropRegion'] = CropRegion
Types.types['ImageContentType'] = ImageContentType
Types.types['SelectedOption'] = SelectedOption
Types.types['Product'] = Product
Types.types['CollectionConnection'] = CollectionConnection
Types.types['CollectionEdge'] = CollectionEdge
Types.types['Collection'] = Collection
Types.types['HTML'] = HTML
Types.types['ProductConnection'] = ProductConnection
Types.types['ProductEdge'] = ProductEdge
Types.types['ProductCollectionSortKeys'] = ProductCollectionSortKeys
Types.types['ImageConnection'] = ImageConnection
Types.types['ImageEdge'] = ImageEdge
Types.types['ProductImageSortKeys'] = ProductImageSortKeys
Types.types['SelectedOptionInput'] = SelectedOptionInput
Types.types['ProductOption'] = ProductOption
Types.types['ProductVariantConnection'] = ProductVariantConnection
Types.types['ProductVariantEdge'] = ProductVariantEdge
Types.types['ProductVariantSortKeys'] = ProductVariantSortKeys
Types.types['Attribute'] = Attribute
Types.types['OrderSortKeys'] = OrderSortKeys
Types.types['Shop'] = Shop
Types.types['PaymentSettings'] = PaymentSettings
Types.types['CountryCode'] = CountryCode
Types.types['CardBrand'] = CardBrand
Types.types['DigitalWallet'] = DigitalWallet
Types.types['Domain'] = Domain
Types.types['ShopPolicy'] = ShopPolicy
Types.types['BlogConnection'] = BlogConnection
Types.types['BlogEdge'] = BlogEdge
Types.types['Blog'] = Blog
Types.types['ArticleConnection'] = ArticleConnection
Types.types['ArticleEdge'] = ArticleEdge
Types.types['Article'] = Article
Types.types['ArticleAuthor'] = ArticleAuthor
Types.types['CommentConnection'] = CommentConnection
Types.types['CommentEdge'] = CommentEdge
Types.types['Comment'] = Comment
Types.types['CommentAuthor'] = CommentAuthor
Types.types['BlogSortKeys'] = BlogSortKeys
Types.types['ArticleSortKeys'] = ArticleSortKeys
Types.types['CollectionSortKeys'] = CollectionSortKeys
Types.types['ProductSortKeys'] = ProductSortKeys
Types.types['StringConnection'] = StringConnection
Types.types['StringEdge'] = StringEdge
Types.types['Mutation'] = Mutation
Types.types['CheckoutAttributesUpdatePayload'] = CheckoutAttributesUpdatePayload
Types.types['UserError'] = UserError
Types.types['Checkout'] = Checkout
Types.types['CheckoutLineItemConnection'] = CheckoutLineItemConnection
Types.types['CheckoutLineItemEdge'] = CheckoutLineItemEdge
Types.types['CheckoutLineItem'] = CheckoutLineItem
Types.types['ShippingRate'] = ShippingRate
Types.types['AvailableShippingRates'] = AvailableShippingRates
Types.types['AppliedGiftCard'] = AppliedGiftCard
Types.types['CheckoutAttributesUpdateInput'] = CheckoutAttributesUpdateInput
Types.types['AttributeInput'] = AttributeInput
Types.types['CheckoutCompleteFreePayload'] = CheckoutCompleteFreePayload
Types.types['CheckoutCompleteWithCreditCardPayload'] = CheckoutCompleteWithCreditCardPayload
Types.types['Payment'] = Payment
Types.types['CreditCard'] = CreditCard
Types.types['Transaction'] = Transaction
Types.types['TransactionKind'] = TransactionKind
Types.types['TransactionStatus'] = TransactionStatus
Types.types['CreditCardPaymentInput'] = CreditCardPaymentInput
Types.types['MailingAddressInput'] = MailingAddressInput
Types.types['CheckoutCompleteWithTokenizedPaymentPayload'] = CheckoutCompleteWithTokenizedPaymentPayload
Types.types['TokenizedPaymentInput'] = TokenizedPaymentInput
Types.types['CheckoutCreatePayload'] = CheckoutCreatePayload
Types.types['CheckoutCreateInput'] = CheckoutCreateInput
Types.types['CheckoutLineItemInput'] = CheckoutLineItemInput
Types.types['CheckoutCustomerAssociatePayload'] = CheckoutCustomerAssociatePayload
Types.types['CheckoutCustomerDisassociatePayload'] = CheckoutCustomerDisassociatePayload
Types.types['CheckoutDiscountCodeApplyPayload'] = CheckoutDiscountCodeApplyPayload
Types.types['CheckoutEmailUpdatePayload'] = CheckoutEmailUpdatePayload
Types.types['CheckoutGiftCardApplyPayload'] = CheckoutGiftCardApplyPayload
Types.types['CheckoutGiftCardRemovePayload'] = CheckoutGiftCardRemovePayload
Types.types['CheckoutLineItemsAddPayload'] = CheckoutLineItemsAddPayload
Types.types['CheckoutLineItemsRemovePayload'] = CheckoutLineItemsRemovePayload
Types.types['CheckoutLineItemsUpdatePayload'] = CheckoutLineItemsUpdatePayload
Types.types['CheckoutLineItemUpdateInput'] = CheckoutLineItemUpdateInput
Types.types['CheckoutShippingAddressUpdatePayload'] = CheckoutShippingAddressUpdatePayload
Types.types['CheckoutShippingLineUpdatePayload'] = CheckoutShippingLineUpdatePayload
Types.types['CustomerAccessTokenCreatePayload'] = CustomerAccessTokenCreatePayload
Types.types['CustomerAccessToken'] = CustomerAccessToken
Types.types['CustomerAccessTokenCreateInput'] = CustomerAccessTokenCreateInput
Types.types['CustomerAccessTokenDeletePayload'] = CustomerAccessTokenDeletePayload
Types.types['CustomerAccessTokenRenewPayload'] = CustomerAccessTokenRenewPayload
Types.types['CustomerActivatePayload'] = CustomerActivatePayload
Types.types['CustomerActivateInput'] = CustomerActivateInput
Types.types['CustomerAddressCreatePayload'] = CustomerAddressCreatePayload
Types.types['CustomerAddressDeletePayload'] = CustomerAddressDeletePayload
Types.types['CustomerAddressUpdatePayload'] = CustomerAddressUpdatePayload
Types.types['CustomerCreatePayload'] = CustomerCreatePayload
Types.types['CustomerCreateInput'] = CustomerCreateInput
Types.types['CustomerDefaultAddressUpdatePayload'] = CustomerDefaultAddressUpdatePayload
Types.types['CustomerRecoverPayload'] = CustomerRecoverPayload
Types.types['CustomerResetPayload'] = CustomerResetPayload
Types.types['CustomerResetInput'] = CustomerResetInput
Types.types['CustomerUpdatePayload'] = CustomerUpdatePayload
Types.types['CustomerUpdateInput'] = CustomerUpdateInput
Types.types['__Schema'] = __Schema
Types.types['__Directive'] = __Directive
Types.types['__DirectiveLocation'] = __DirectiveLocation
Types.queryType = 'QueryRoot'
Types.mutationType = 'Mutation'
Types.subscriptionType = null

function recursivelyFreezeObject (structure) {
  Object.getOwnPropertyNames(structure).forEach(key => {
    const value = structure[key]
    if (value && typeof value === 'object') {
      recursivelyFreezeObject(value)
    }
  })
  Object.freeze(structure)
  return structure
}

const types = recursivelyFreezeObject(Types)

exports.default = types
