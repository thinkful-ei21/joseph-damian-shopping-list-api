/* global store */
'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items/`, callback);
  };
  
  const createItem = function(name, callback){
    const newItem = JSON.stringify({ 
      name: name
    });
    $.ajax({
      url: `${BASE_URL}/itemseee/`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: function(err){
        console.log(err);
        store.errorReport(err);
      },
    });
  };

  const updateItem = function(id, name, callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({name: name}),
      success: callback,
      error: JSON.stringify,
    });
  };

  const findAndDelete = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}items${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({id: id}), 
      success: callback,
      error: function(err){
        console.log(err + 'error');
        store.errorReport(err);
      },
    });
  };

  return {
    getItems, createItem, updateItem, findAndDelete
  };
}

());