let DisplayNumbers = '';
//displaying in the input box
function display(value){
    DisplayNumbers += value;
    document.querySelector('.input-section').value = DisplayNumbers;   
}
    //clear button
 document.querySelector('.clear-button').addEventListener('click',()=>{
    document.querySelector('.input-section').value = '';
    DisplayNumbers = '';   
});

    //calculation button
document.querySelector('.equal-button').addEventListener('click',()=>{
    let display = document.querySelector('.input-section');

     try{ 
        let solution = eval(display.value);
        solution == 'Infinity' ? display.value = 'undefined' : display.value = solution;
        DisplayNumbers = '';
    }catch (error){
        display.value = 'undefined';
    }
});

