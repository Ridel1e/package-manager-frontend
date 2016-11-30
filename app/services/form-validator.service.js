import AngularObject from 'helpers/angular-object';
import * as Helpers from 'helpers/common-helpers';

class FormValidator extends AngularObject {
  constructor ($q, $rootScope) {
    'ngInject';
    super($q, $rootScope);

    this._validators = {

    };
  }

  /**
   * add async validator to service.
   * 
   * @param {string} name
   * @param {Function} callback
   * 
   * @memberOf FormValidator
   */
  addAsyncValidator (name, callback) {
    if(!(this._validators[name] instanceof Function)) {
      this._validators[name] = 
        this._createValidator(callback, true);
    }
    else {
      // TODO
    }
  }

  /**
   * add sync validator to service.
   * 
   * @param {string} name
   * @param {Function} callback
   * 
   * @memberOf FormValidator
   */
  addValidator (name, callback) {
    if(!(this._validators[name] instanceof Function)) {
      this._validators[name] = 
        this._createValidator(callback);
    }
    else {
      // TODO
    }
  }

  setFormValidation (form, schema) {
    schema
      .forEach((fieldSchema) => 
        this._setFieldRules(form[fieldSchema.fieldName], fieldSchema.rules, form));
  }

  _setFieldRules(field, rules, form) {
    rules.forEach((rule) => {
      const boundedFields = _getBoundedFields(rule.bindWith);

      if(rule.async) {
        field.$asyncValidators[rule.name] = 
          this._validators[rule.name](rule.data, boundedFields);
      }
      else {
        field.$validators[rule.name] = 
          this._validators[rule.name](rule.data, boundedFields);
      }

      boundedFields.forEach((boundedField) => 
        this._addWatcher(boundedField, field));
    })
  }

  /**
   * 
   * @private 
   * @param {Function} callback
   * @param {boolean} isAsync
   * 
   * @memberOf FormValidator
   */
  _createValidator(callback, isAsync = false) {
    return (data, boundedFields) => {

      return (modelValue, viewValue) => {
        const boundedFieldsValues = 
          this._getFieldsValues(boundedFields);

        const args = 
          Array.prototype.concat(modelValue, data, boundedFieldsValues);

        if(isAsync) {
          return Helpers.isEmpty(modelValue) ? $q.when() : callback.apply(null, args);
        }
        else {
          return Helpers.isEmpty(modelValue) || callback.apply(null, args);
        }
      }
    }
  }

  _getFieldsValues(boundedFields = []) {
    return boundedFields.map((field) => field.$modelValue);
  }

  _getBoundedFields(boundedFields = [], form) {
    return boundedFields.map((field) => form[field]);
  }

  _addWatcher(boundedField, field) {
    $rootScope
      .$watch(
        () => boundedField.$modelValue,
        () => field.$validate()
      );
  }
}

export default FormValidator;