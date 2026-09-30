const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    // Educational Details
    class: {
      type: String,
      enum: ['9', '10', '11', '12'],
      required: true,
    },
    board: {
      type: String,
      enum: ['ICSE', 'CBSE', 'ISC', 'State Board', 'International'],
      required: true,
    },
    school: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      pincode: {
        type: String,
        required: true,
        match: /^[0-9]{6}$/,
      },
    },
    stream: {
      type: String,
      enum: ['Science', 'Commerce', 'Humanities', 'General'],
      default: null,
    },
    subjects: {
      type: [String],
      default: [],
    },
    // Verification Status
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    isDetailsVerified: {
      type: Boolean,
      default: false,
    },
    verificationDocuments: {
      schoolIdCard: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
        verified: Boolean,
      },
      addressProof: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
        verified: Boolean,
      },
    },
    // Account Status
    accountStatus: {
      type: String,
      enum: ['pending', 'active', 'suspended', 'disabled'],
      default: 'pending',
    },
    lastLogin: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
