app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        Price: 4.95
      },
  
    ];
  
     $scope.mains = [
      {
        name: 'Chicken Parmesan',
        description: 'Breaded chicken with marinara sauce and melted cheese.',
        price: 12.95
      },
      {
        name: 'Beef Burger',
        description: 'Juicy beef patty with lettuce, tomatoes, and special sauce.',
        price: 10.95
      },
      {
        name: 'Vegetable Stir Fry',
        description: 'Assorted vegetables sautéed with tofu in a savory sauce.',
        price: 9.95
      }
    ];
  
     $scope.extras = [
      {
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic and herbs.',
        price: 2.95
      },
      {
        name: 'French Fries',
        description: 'Crispy golden fries.',
        price: 3.50
      },
      {
        name: 'Caesar Salad',
        description: 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing.',
        price: 4.95
      }
    ];
  
  
  }]);