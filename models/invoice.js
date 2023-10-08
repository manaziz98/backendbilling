const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },

    materialId: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'Material',

    },

    serviceId: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'Service',

    },
    num: {
        type: Number,
        required: true
    },
    etats: {
        type: Boolean,
        required: true,
        default: false,
    },

    emontantHT: {
        type: Number,
        required: true,

    },
    tTVA: {
        type: Number,
        required: true,

    },
    montantTTC: {
        type: Number,
        required: true,

    },
    netapayer: {
        type: Number,
        required: true,

    },

    tfc: {
        type: Number,
        required: true,
        default: 600,
    },
    nomrs: {
        type: String,
        require
    }


},
    {
        timestamps: true
    });
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
