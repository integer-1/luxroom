const Shipping = () => {
  return (
    <div className="shipping-info">
      <h3>Shipping Information</h3>

      <div className="shipping-info-box">
        <h5>Shipping Cost</h5>

        <p >
          Free shipping on orders over $150NZD <br />
          (via courier 1 - 3 business days once dispatched) <br />
          $20NZD shipping on orders under $150NZD (via courier 1 - 3 business
          days once dispatched) <br />
          Please allow extra days for delivery to rural addresses. <br />
          Please note we do not ship to PO Boxes so please provide a physical
          address during checkout.
        </p>

        <h5>General Information</h5>
        <p>
          Please make sure your order is correct. No order changes or
          cancellations once the order has been placed. <br />
          Customs duties & taxes are the responsibility of the buyer for all
          countries - if you refuse your parcel at customs due to the fees your
          order will be destroyed by customs and will not be refunded by LUXLOOM{' '}
          <br />
          We do not ship to PO Boxes - please do not use PO Boxes as your
          delivery address or the order will not be dispatched
        </p>

        <h5>How long does it take for my order to be processed? </h5>
        <p>
          We aim to ship goods within 2 business days of receiving your order.
          Please note we ship orders on working days and weekend orders will be
          packed and dispatched the following Monday. However if we are having a
          store wide discount or a new season launch due to the large amount of
          orders we receive our processing times can be longer and the expected
          time delay can be 5-7 business days.This normally happens once a month
          with new launches. We appreciate your patience while our team works
          hard to get the orders dispatched as fast as we can. Please double
          check your shipping address is correct as we can not be held
          responsible for un-delivered orders due to incorrect delivery details.
          Gift Card purchases do not count towards the Free Shipping thresholds
          - to achieve Free Shipping, you must spend over the threshold for your
          country on physical products excluding Gift Cards. Please note that if
          you have redeemed a Loyalty discount, and this results in you being
          incorrectly charged a shipping fee on an order, please contact us and
          we will assist you.
        </p>
      </div>
    </div>
  )
}

export default Shipping
