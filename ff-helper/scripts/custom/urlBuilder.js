var urlsByPayment = {
    qa: {
        seq: "http://seq.ckotech.co/#/events?filter=RequestPath%20like%20'%25{paymentId}'%20OR%20StreamId%20like%20'%25{paymentReference}'&signal=signal-130",
        kibana: "",
        evs: "http://eventstore-qa.cko.lon:2113/web/index.html#/streams/Gateway.AlternativeCharge-{paymentReference}",
    },
    sandbox: {
        seq: "http://seq.ckotech.co/#/events?filter=RequestPath%20like%20'%25{paymentId}'%20OR%20StreamId%20like%20'%25{paymentReference}'&signal=signal-97",
        kibana: "https://vpc-apm-xfpb2rskgjytteyi3v6hi3n5yi.eu-west-2.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2FM,mode:quick,to:now%2FM))&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'2d841900-6b48-11e9-bd21-d32073057a62',key:fields.RequestPath,negate:!f,params:(query:{paymentId},type:phrase),type:phrase,value:{paymentId}),query:(match:(fields.RequestPath:(query:{paymentId},type:phrase))))),index:'2d841900-6b48-11e9-bd21-d32073057a62',interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))",
        evs: "http://eventstore-sb.cko.lon:2113/web/index.html#/streams/Gateway.AlternativeCharge-{paymentReference}"
    },
    prod: {
        seq: "",
        kibana: "",
        evs: ""
    }
}

var urlsByCorrelation = {
    qa: {
        seq: "http://seq.ckotech.co/#/events?filter=CorrelationId%20%3D%20'{correlationId}'&signal=signal-130",
        kibana: ""
    },
    sandbox: {
        seq: "http://seq.ckotech.co/#/events?filter=CorrelationId%20%3D%20'{correlationId}'&signal=signal-97",
        kibana: "https://vpc-apm-xfpb2rskgjytteyi3v6hi3n5yi.eu-west-2.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2FM,mode:quick,to:now%2FM))&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'2d841900-6b48-11e9-bd21-d32073057a62',key:fields.CorrelationId,negate:!f,params:(query:'{correlationId}',type:phrase),type:phrase,value:'{correlationId}'),query:(match:(fields.CorrelationId:(query:'{correlationId}',type:phrase))))),index:'2d841900-6b48-11e9-bd21-d32073057a62',interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))"
    },
    prod: {
        seq: "",
        kibana: ""
    }
}

function getUrlByPayment(env, resource, paymentId, paymentReference) {
    return urlsByPayment[env][resource].replaceAll("{paymentId}", paymentId).replace("{paymentReference}", paymentReference);  
};

function getUrlByCorrelation(env, resource, correlationId) {
    return urlsByCorrelation[env][resource].replaceAll("{correlationId}", correlationId);  
};

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};