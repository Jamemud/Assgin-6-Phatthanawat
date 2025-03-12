let dataArray = [];

function getInput() {
    let input;
    do {
        input = prompt("กรุณากรอกข้อมูล (กด Cancel หรือปล่อยว่างเพื่อหยุด)");
                        
        if (input === null || input.trim() === "") {
            break;
        }
                        
        dataArray.push(input.trim());
                        
        document.getElementById('status').innerHTML = 
            `เพิ่มข้อมูล "${input}" แล้ว (ข้อมูลทั้งหมด ${dataArray.length} รายการ)`;
        
    } while (true);
                
    if (dataArray.length > 0) {
        document.getElementById('status').innerHTML += 
            "<br>เสร็จสิ้นการรับข้อมูล กรุณากดปุ่ม 'แสดงผลข้อมูล' เพื่อดูผลลัพธ์";
    }
}

function displaySorted() {
    if (dataArray.length === 0) {
        document.getElementById('status').innerHTML = 
            "ไม่มีข้อมูล กรุณากดปุ่ม 'กรอกข้อมูล' เพื่อเพิ่มข้อมูล";
        return;
    }
                
    dataArray.sort();
                
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
                
    dataArray.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${item}`;
        resultList.appendChild(li);
    });
    
    document.getElementById('status').innerHTML = 
        `แสดงข้อมูลที่เรียงลำดับแล้ว (${dataArray.length} รายการ)`;
}
