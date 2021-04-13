<php 
$bananas = $_POST['bananas'];
$apples = $_POST['apples'];
$pears = $_POST['pears'];
$watermelons = $_POST['watermelons'];
$cucumbers = $_POST['cucumbers'];
$tomato = $_POST['tomato'];
$carrot = $_POST['carrot'];
$meat = $_POST['meat'];
$storeName = $_POST['storeName'];

if (!empty($bananas) || !empty($apples) || !empty($pears) || !empty($watermelons) || !empty($cucumbers) || !empty($tomato) || !empty($carrot) || !empty($meat) || !empty($storeName)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "root";
    $dbname = "projectppi";

    $conn = mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connection_error()) {
        die('Conn error');
    } else {
        $SELECT = "SELECT storeName From register where storeName = ? Limit = 1";
        $INSERT = "INSERT into register (bananas, apples, pears, watermelons, cucumbers, tomato, carrot, meat, storeName)  values(?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $storeName);
        $stmt->execute();
        $stmt->bind_result($storeName);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum==0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssii", $bananas, $apples, $pears, $watermelons, $cucumbers, $tomato, $carrot, $meat, $storeName);
            $stmt->execute();
            echo "Add!";
        } else {
            echo "Someone already register using this store name";
        }
        $stmt->close();
        $conn->close();
    } 


} else {
    echo "All field are required";
    die();
}

?>
