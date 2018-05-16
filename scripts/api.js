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
      url: `${BASE_URL}/items/`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: function(err){
        console.log('Something caught fire.');
      },
    });
  };

  const updateItem = function(id, updateData, callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({
        name: updateData
      }),
      success: callback,
      error: function(err){
        console.log('Something caught fire.');
      },
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({id: id}), 
      success: callback,
      error: function(err){
        console.log('Something caught fire.');
      },
    });
  };

  return {
    getItems, createItem, updateItem, deleteItem,
  };
}

());