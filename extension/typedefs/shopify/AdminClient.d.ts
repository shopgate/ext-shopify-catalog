import { ShopifyActions } from 'shopify-api-node-interface/shopify-api-node-interface'

abstract class ShopifyAdminClient implements ShopifyActions {

}

class ShopifyAccessTokenObject {
    public access_token: string
    public access_scope: string
    public created_at: string
    public id: number
    public title: string
}
