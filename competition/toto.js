function saveMemo() {
    var input = document.getElementById("memoInput").value;
    var file = new Blob([input], {type: "text/plain"});

    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = "memo.txt";
    a.click();
}