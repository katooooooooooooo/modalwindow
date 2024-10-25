// ボタンのクリックでモーダルを表示
document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('modal1').style.display = 'block';
});

document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'block';
});

document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('modal3').style.display = 'block';
});

// モーダルを閉じる
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        let modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// モーダルウィンドウ外をクリックした場合に閉じる
window.addEventListener('click', function(event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
