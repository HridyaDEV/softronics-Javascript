const data = [

    { id: 1, name: "Laptop", price: 800, category: "Electronics", status: "delivered" },
    { id: 2, name: "Book", price: 20, category: "Stationery", status: "pending" },
    { id: 3, name: "Phone", price: 600, category: "Electronics", status: "delivered" },
    { id: 4, name: "Pen", price: 2, category: "Stationery", status: "pending" },
    { id: 5, name: "Tablet", price: 300, category: "Electronics", status: "delivered" }
      
    ];

    function tasks(data){
        const electronicsProduct = data.filter(item => item.category === "Electronics");

        const filteredNames = electronicsProduct.map(item => item.name.toUpperCase());

        const totalPrice = electronicsProduct.reduce((sum, item) => sum + item.price,0);

        const firstExpensiveProduct = data.find((item) => item.price > 500);

        const sortedProducts = electronicsProduct.sort((a,b) => b.price - a.price);

        const hasPending = data.some(item => item.status === "pending");



        return{
            filteredNames,
            totalPrice,
            firstExpensiveProduct,
            sortedProducts,
            hasPending,
        }

    }
    


    console.log(tasks(data));

  

       
        

       
         