const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var promotionsSchema = new Schema({
    name:  {
        type: String,
        required: true,
        unique: true
    },
    image: {
    		type: String,
    		required: true,
    		unique: true
  	},
  	label: {
    		type: String,
    		required: false,
    		default: ''
  	},
  	price: {
    		type: Currency,
    		required: true,
    		min: 1,
    		max: 50000
  	},
  	description: {
    		type: String,
    		required: true
  	}
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;
