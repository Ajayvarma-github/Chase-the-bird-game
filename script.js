<script>
    let cnt = 0;
    function easy() {
        document.getElementById('circle').style.animationDuration = '17s';
        document.getElementById('circle').className = 'crcl';
    }
    function medium() {
        document.getElementById('circle').style.animationDuration = '14s';
        document.getElementById('circle').className = 'crcl';
    }
    function hard() {
        document.getElementById('circle').style.animationDuration = '10s';
        document.getElementById('circle').className = 'crcl';
    }
    function count() {
        cnt += 1;
        document.getElementById('score').innerHTML = cnt;
    }
    function restart() {
        window.location.reload();
    }
  </script>
