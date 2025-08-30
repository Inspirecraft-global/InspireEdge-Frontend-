// Common validation rules for forms
export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
};

export const passwordValidation = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
};

export const confirmPasswordValidation = (passwordFieldName = 'password') => ({
  required: 'Please confirm your password',
  validate: (value, formValues) =>
    value === formValues[passwordFieldName] || 'Passwords do not match',
});

export const businessNameValidation = {
  required: 'Business name is required',
};

export const requiredField = (fieldName) => ({
  required: `${fieldName} is required`,
});

// Store connection validations
export const shopifyStoreValidation = {
  required: 'Store domain is required',
  pattern: {
    value: /^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/,
    message: 'Please enter a valid Shopify domain (e.g., mystore.myshopify.com)',
  },
};

export const storeUrlValidation = {
  required: 'Store URL is required',
  pattern: {
    value: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
    message: 'Please enter a valid URL (e.g., https://mystore.com)',
  },
};

export const consumerKeyValidation = {
  required: 'Consumer Key is required',
  minLength: {
    value: 10,
    message: 'Consumer Key must be at least 10 characters',
  },
  pattern: {
    value: /^ck_[a-zA-Z0-9]{32,}$/,
    message: 'Consumer Key should start with "ck_" followed by 32+ characters',
  },
};

export const consumerSecretValidation = {
  required: 'Consumer Secret is required',
  minLength: {
    value: 10,
    message: 'Consumer Secret must be at least 10 characters',
  },
  pattern: {
    value: /^cs_[a-zA-Z0-9]{32,}$/,
    message: 'Consumer Secret should start with "cs_" followed by 32+ characters',
  },
};

export const magentoStoreUrlValidation = {
  required: 'Store URL is required',
  pattern: {
    value: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
    message: 'Please enter a valid Magento store URL',
  },
};

export const magentoAccessTokenValidation = {
  required: 'Access Token is required',
  minLength: {
    value: 32,
    message: 'Access Token must be at least 32 characters',
  },
};

export const customStoreIdValidation = {
  required: 'Store ID is required',
  minLength: {
    value: 3,
    message: 'Store ID must be at least 3 characters',
  },
  pattern: {
    value: /^[a-zA-Z0-9_-]+$/,
    message: 'Store ID can only contain letters, numbers, hyphens, and underscores',
  },
};

export const apiKeyValidation = {
  required: 'API Key is required',
  minLength: {
    value: 16,
    message: 'API Key must be at least 16 characters',
  },
};

export const apiSecretValidation = {
  required: 'API Secret is required',
  minLength: {
    value: 16,
    message: 'API Secret must be at least 16 characters',
  },
}; 