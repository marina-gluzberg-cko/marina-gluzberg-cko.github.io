goDeep = function(){
    let prefix = 'https://benefit.bh/?';

    /* let message = {
        status:prefix+'inapp',
        appId:$rootScope.appId,
        merchantId:$rootScope.merchantId,
        qrData:$rootScope.qrData,hashedString:$rootScope.secure_hash,
        transactionAmount:$rootScope.transactionAmount,
        referenceNumber:$rootScope.referenceNumber, 
        paymentType: $rootScope.paymentType, 
        showResult: $rootScope.showResult
    }; */

    let messageDummy = {
        status:prefix + 'inapp',
        appId:3865241791,
        merchantId:9998888777,
        qrData:'0002010102120510999888877749460008mobi.foo01109998888777021010000000010402db52041123530304854081000.0005802BH5917Test+Web+Checkout6003Web6228050742216430713201386524179163049DFE&',
        hashedString:'4VfglMTCVxoQr8MLIgtk9OLosbmU7G1tSu+SDWJNqjY%3D&',
        transactionAmount:'1000.000',
        referenceNumber:4221643, 
        paymentType: 'web', 
        showResult: 0
    };

    //window.postMessage(messageDummy, '*');

    let link = "benefitinapp://cwinappdeeplinking?=" +
                            "app_id=3865241791&" +
                            "merchant_id=9998888777&" +
                            "qrdata=0002010102120510999888877749460008mobi.foo01109998888777021010000000010402db52041123530304854081000.0005802BH5917Test+Web+Checkout6003Web6228050742216430713201386524179163049DFE&" +
                            "referenceNumber=4221643&" +
                            "hashedString=4VfglMTCVxoQr8MLIgtk9OLosbmU7G1tSu+SDWJNqjY%3D&" +
                            "amount=1000.000&" +
                            "paymentType=web&" +
                            "showResult=0"

    window.open(link);
};