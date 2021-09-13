-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: MyBlog
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `body` text NOT NULL,
  `date` varchar(40) NOT NULL,
  `imageUrl` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_user` (`user_id`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (4,'Darth Vader Jedi caído.','<p><strong>Darth Vader</strong>, también conocido por su nombre de nacimiento <a href=\"https://es.wikipedia.org/wiki/Anakin_Skywalker\"><strong>Anakin Skywalker</strong></a>, es un personaje de ficción en la franquicia de <a href=\"https://es.wikipedia.org/wiki/Star_Wars\"><i>Star Wars</i></a>. Vader aparece en la trilogía original como un antagonista cuyas acciones dirigen la trama, mientras que su pasado como Anakin Skywalker y la historia de su corrupción por <a href=\"https://es.wikipedia.org/wiki/Darth_Sidious\">Darth Sidious</a> y su paso al <a href=\"https://es.wikipedia.org/wiki/Lado_Oscuro\">Lado Oscuro</a> son centrales en la narrativa de la trilogía de la precuela.</p><p>El personaje fue creado por <a href=\"https://es.wikipedia.org/wiki/George_Lucas\">George Lucas</a> y ha sido retratado por numerosos actores. Sus apariciones abarcan las primeras seis películas de Star Wars, así como <a href=\"https://es.wikipedia.org/wiki/Rogue_One:_una_historia_de_Star_Wars\"><i>Rogue One</i></a>, y su personaje está fuertemente referenciado en <a href=\"https://es.wikipedia.org/wiki/Star_Wars:_Episodio_VII_-_El_despertar_de_la_Fuerza\"><i>Star Wars: Episodio VII - El despertar de la Fuerza</i></a>. También es un personaje importante en el universo expandido de Star Wars de series de televisión, videojuegos, novelas, literatura y cómics. Darth Vader se ha convertido en uno de los villanos más emblemáticos de la cultura popular, y ha figurado entre los más grandes villanos y personajes ficticios de la historia.<a href=\"https://es.wikipedia.org/wiki/Darth_Vader#cite_note-IGN.com-2\">2</a>​<a href=\"https://es.wikipedia.org/wiki/Darth_Vader#cite_note-Comicbook.com-3\">3</a>​</p><p>&nbsp;</p><h2>Biografia</h2><p>Anakin Skywalker nace en el planeta <a href=\"https://es.wikipedia.org/wiki/Tatooine_(Star_Wars)\">Tatooine</a>, siendo hijo de <a href=\"https://es.wikipedia.org/wiki/Shmi_Skywalker\">Shmi Skywalker</a> y de padre desconocido. Tanto Anakin como su madre son esclavos de <a href=\"https://es.wikipedia.org/wiki/Watto\">Watto</a>, un alienígena chatarrero. El joven destaca pronto como inventor y hábil piloto y la fuerza es detectada en él muy pronto.<br>Durante su infancia, conoce al <a href=\"https://es.wikipedia.org/wiki/Jedi\">jedi</a> <a href=\"https://es.wikipedia.org/wiki/Obi-Wan_Kenobi\">Obi-Wan Kenobi</a>, quien se convierte en su mejor amigo y quien le entrena como jedi. Tras una misión, Anakin conoce a <a href=\"https://es.wikipedia.org/wiki/Padm%C3%A9_Amidala\">Padmé Amidala</a>, la princesa del planeta <a href=\"https://es.wikipedia.org/wiki/Naboo\">Naboo</a> y senadora de la república galáctica, de la que se enamora perdidamente y con la que, contraviniendo las reglas jedi, termina casándose. Durante su juventud, Anakin, convertido ya en <a href=\"https://es.wikipedia.org/wiki/Padawan\">padawan</a> de Obi Wan Kenobi, participa activamente en las <a href=\"https://es.wikipedia.org/wiki/Guerras_Clon\">Guerras Clon</a>, que se mantendrán hasta su madurez, convertido ya en un jedi de pleno derecho.<br>Posteriormente, Anakin descubre que su esposa, Padmé, está embarazada, pero comienza a tener horribles pesadillas, en las que ve como esta muere. Por otro lado, el joven jedi se acerca cada vez más al <a href=\"https://es.wikipedia.org/wiki/Canciller_Palpatine\">Canciller Palpatine</a>, quien es un <a href=\"https://es.wikipedia.org/wiki/Sith\">Sith</a> encubierto y quien lo acabará arrastrando al lado oscuro.<br>Tras su caída, adopta el nombre de Darth Vader y acaba enfrentándose a su maestro, Kenobi, quien, tras una gran pelea de espadas láser, acaba mutilando al joven y abandonándolo a su suerte en el planeta <a href=\"https://es.wikipedia.org/wiki/Mustafar\">Mustafar</a>, donde acaba malherido y calcinado en la lava.<br>Posteriormente, Anakin es recogido por Palpatine, quien ha suspendido el consejo de la república y proclamado emperador, y quien le aplica medicina Sith, recuperando sus extremidades y convirtiéndolo en su aprendiz. Padme da a luz a gemelos, pero muere en el parto. Los bebés son ocultados por Obi Wan (El niño con la familia Skywalker y la niña con el senador <a href=\"https://es.wikipedia.org/wiki/Bail_Organa\">Bail Organa</a>) y Anakin ignora que los niños han sobrevivido.<br>Veinte años más tarde, Vader descubre que su hijo sobrevivió y que es el líder de la resistencia imperial. Vader trata de arrastrar a su hijo al lado oscuro, infructuosamente, ignorando que este tiene una hermana gemela, que Padme no tuvo un hijo, sino dos, que fueron separados tras su caída.<br>Finalmente, tras años de lucha contra la rebelión encabezada por sus dos hijos, (<a href=\"https://es.wikipedia.org/wiki/Luke_Skywalker\">Luke Skywalker</a> y <a href=\"https://es.wikipedia.org/wiki/Leia_Organa\">Leia Organa</a>), Vader conduce al joven Luke ante el emperador con la intención de lograr su caída al lado oscuro. Tras una batalla con espadas láser en la que Luke derrota a su padre, el emperador le ordena que lo mate, a lo que Luke se niega. Este, en represalia, trata de matar a Luke, haciendo que Vader reaccione finalmente, agarrando al emperador y asesinándolo y haciendo que regrese Anakin de nuevo. Malherido, Anakin es consciente del final de su vida, y le pide a su hijo que le quite el casco que ha llevado durante más de veinte años para poder verle con sus propios ojos. Finalmente, tras cumplir su última voluntad, Anakin, siendo de nuevo el glorioso y valiente <a href=\"https://es.wikipedia.org/wiki/Jedi\">Jedi</a> de su juventud, muere, al fin, en paz.</p><p>&nbsp;</p>','1626992597756','http://localhost:4000/uploads/img/imageUrl-1628039245008.jpeg',3),(5,'Caza Tie de star wars','<p>El Caza TIE es el diseño original para los modelos TIE actualizados más adelante, como el <a href=\"https://starwars.fandom.com/es/wiki/Bombardero_TIE/sa/Leyendas\">bombardero TIE/sa</a>, el <a href=\"https://starwars.fandom.com/es/wiki/Interceptor_TIE/IN/Leyendas\">interceptor TIE/IN</a>, el <a href=\"https://starwars.fandom.com/es/wiki/Defensor_TIE/D\">Defensor TIE/D</a>, el <a href=\"https://starwars.fandom.com/es/wiki/Caza_estelar_aut%C3%B3mata_TIE/D\">caza estelar autómata TIE/D</a> y muchos más. El caza TIE era un descendiente del <a href=\"https://starwars.fandom.com/es/wiki/Caza_estelar_T.I.E.\">caza estelar T.I.E.</a> y el <a href=\"https://starwars.fandom.com/es/wiki/Caza_estelar_Alfa-3_clase_Nimbus_Ala-V/Leyendas\">caza estelar Ala-V</a>, ambos desarrollados para la <a href=\"https://starwars.fandom.com/es/wiki/Rep%C3%BAblica_Gal%C3%A1ctica/Leyendas\">República Galáctica</a>, y fueron fabricados por Sistemas de Flotas <a href=\"https://starwars.fandom.com/es/wiki/Raith_Sienar/Leyendas\">Sienar</a>. Además del T.I.E. y el Ala-V, también descendió del <a href=\"https://starwars.fandom.com/es/wiki/Caza_estelar_TIE\">caza estelar TIE</a>, el primer modelo TIE desarrollado para el Imperio Galáctico. El homónimo para el caza y la línea eran los <a href=\"https://starwars.fandom.com/es/wiki/Motor_de_iones_gemelos_P-s4\">motores de iones gemelos P-s4</a> de Sistemas de Flotas Sienar que actuaban como sus propulsores. Sin embargo, también en cierta medida fue nombrado como una prenda de vestir debido a su forma general que se asemeja a una corbata de lazo.<a href=\"https://starwars.fandom.com/es/wiki/Caza_estelar_TIE/LN#cite_note-RS_II_guide-29\">[29]</a></p>','1626992826180','http://localhost:4000/uploads/img/imageUrl-1628038895413.jpeg',3),(9,'Tercer post editado despues de borrar','<p>Lo edité despues de borrar dos documentos</p>','1628287551121','http://localhost:4000/uploads/img/imageUrl-1628287544451.jpeg',3),(10,'Creacion de un documento','<p>Parece ser que acabé!!!!!!!</p>','1628288745122','http://localhost:4000/uploads/img/imageUrl-1628288740516.jpeg',3),(11,'Ejemplo solo para el scroll','<p>ohhhhh como estan</p><p>yo bien&nbsp;</p><p>y tu¡</p><p>como has estado en la fakn live</p><p>&nbsp;</p>','1629052015559',NULL,3),(12,'Necesitaba otra ','<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit.</p><p>Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>','1629052044053',NULL,3),(13,'Talking to the moon','<p>Cancion del bruno marssssssss</p>','1629054002908',NULL,3);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(70) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','fisch','admin@mail.com','dc76e9f0c0006e8f919e0c515c66dbba3982f785'),(2,'jorge','fischer','jorge@mail.com','$2b$10$JqYhwSdjuL2CYpca8x4X7.A5zzhuYCbH8gzBu8oGtjmcvo99EtQyC'),(3,'jorge','fischer','enrique@mail.com','$2b$10$nA5mZfItIm4aKbyCfOqeeOFpvMJDkmj62pg3mmroWFQ0F2dek0Cqq'),(4,'Elian','Fischer Delgado','elian@mail.com','$2b$10$mJDD/7l.coSXajitTjvQYuXxIu7D3dA8yEfBtR560ciqWjIiEWzbi');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-13 13:49:01
