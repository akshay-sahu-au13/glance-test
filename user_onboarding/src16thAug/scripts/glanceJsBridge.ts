/* eslint-disable no-undef */

// PreferencesStore

import CategoryData from '../mockData/data';

var catgData = CategoryData;

export function putInt(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putInt(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

export function getInt(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getInt(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

export function putLong(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putLong(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

export function getLong(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getLong(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

export function putFloat(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putFloat(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

export function getFloat(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getFloat(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

export function putString(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putString(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

export function getString(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getString(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

export function putBoolean(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putBoolean(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

export function getBoolean(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getBoolean(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

export function remove(key) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.remove(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export function containsKey(key) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.containsKey(key);
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export function clearPreferences() {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.clear();
    } catch (err) {
      console.log(err);
    }
  }
}

export const checkGlanceInterface =
  typeof GlanceAndroidInterface != 'undefined' ||
  typeof AndroidUtils != 'undefined';

export const isKeyguardLocked = () => {
  if (typeof AndroidUtils != 'undefined') {
    return AndroidUtils.isKeyguardLocked()();
  }
};

// --------- For Xiaomi -------
export const launchIntentAfterUnlock = (intentAction, intentData) => {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchIntentAfterUnlock(intentAction, intentData);
  }
};

export const launchIntent = (intentAction, intentData) => {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchIntent(intentAction, intentData);
  }
};

// --------- For Samsung -------
export const launchAppAfterUnlock = (appPackageName, deepLinkUrl) => {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchAppAfterUnlock(appPackageName, deepLinkUrl);
  }
};

export const launchApp = (appPackageName, deepLinkUrl) => {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchApp(appPackageName, deepLinkUrl);
  }
};

export const sendCustomAnalytics = ({ extras, eventType }) => {
  console.log('eventType:', eventType, ' extras:', extras);
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.sendCustomAnalyticsEvent(
      eventType,
      JSON.stringify(extras)
    );
  }
};

export const isGlanceHighlights = (): boolean => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface?.isHighlights();
  }
};

export const glanceHold = () => {
  console.log('glanceHold');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface?.holdGlance();
  }
};

export const glanceUnhold = () => {
  console.log('glanceUnhold');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface?.unHoldGlance();
  }
};

export const glanceMoveToNext = () => {
  console.log('Moved to Next Glance');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface?.moveToNextGlance();
  }
};

export const glanceMoveToPrev = () => {
  console.log('glanceMoveToPrev');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface?.moveToPrevGlance();
  }
};

export const hideNativeUiElementsOfGlance = (elements: string[]) => {
  // Hides the given native element
  console.log('Called Function to hide native elements!');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    elements.map((element) => {
      GlanceAndroidInterface?.hideNativeUiElement(element);
    });
  }
};
//-----------------------------------Language sdk js bridges----------------------------------------//

export const getAllSubscribedLanguages = (): string[] => {
  // console.log('getAllSubscribedLanguages');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllSubscribedLanguages();
  } else {
    return ['en']; // comment this line later
  }

  //This returns List<String> as json string where String is languageId
};

export const isLanguageSubscribed = (languageId: string): boolean => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.isLanguageSubscribed(languageId);
  } else {
    return true; // comment this line later
  }

  // return type true and false

  //Method will tell if languageId id is subscribed (true) or not (false).
};

export const subscribeLanguage = (languageId: string): void => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.subscribeLanguage(languageId);
  } else {
    console.log('Language Subscribed!: ', languageId);
  }

  //Input is languageId to subscribe
};

export const unsubscribeLanguage = (languageId: string): void => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.unsubscribeLanguage(languageId);
  } else {
    console.log('Language Unsubscribed: ', languageId);
  }

  //Input is languageId to unsubscribe
};

export const getAllLanguages = () => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllLanguages();
  } else {
    return '[{"displayName":"tamil","id":"ta","isSubscriptionModifiable":false},{"displayName":"kannada","id":"kn","isSubscriptionModifiable":true},{"displayName":"bangla","id":"bn","isSubscriptionModifiable":true},{"displayName":"telugu","id":"te","isSubscriptionModifiable":false},{"displayName":"hindi","id":"hi","isSubscriptionModifiable":false},{"displayName":"marathi","id":"mr","isSubscriptionModifiable":true},{"displayName":"english","id":"en","isSubscriptionModifiable":false}]';
  }

  // It returns serialized (json) map of list<GlanceLanguage>

  // [{'displayName':'English','id':'en','isSubscriptionModifiable':false}]
};

// -------------------------------------- Categories SDK JS Bridge ------------------------------------//

export const getAllCategories = () => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllCategories();
  }

  //This returns List<GlanceCategories> as json string where GlanceCategory has {id, displayName, isSubscriptionModifiable}
};

export const isCategorySubscribed = (categoryId) => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.isCategorySubscribed(categoryId); // return type true and false
  } else {
    return false;
  }

  //Method will tell if category id is subscribed (true) or not (false).
};

export const updateCategorySubscriptions = (
  serializedCategorySubscriptionMap
) => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.updateCategorySubscriptions(
      serializedCategorySubscriptionMap
    );
  } else {
    catgData = JSON.parse(serializedCategorySubscriptionMap);
    console.log('catgData from glanceJSBridge file:::', catgData);
    console.log('Category List Updated!!');
  }
  //Input is serialized (json) map of categoryIds to subscription state (true/false)
};

export const getCategorySubscriptions = () => {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getCategorySubscriptions();
  } else {
    return JSON.stringify(catgData);
  }
};

// It returns serialized (json) map of active categoryIds and their subscription state(boolean) .

// Example : "{\"#daily_digest\":true,\"#entertainment\":false, \"#travel\":true}";
