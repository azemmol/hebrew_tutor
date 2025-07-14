CREATE TABLE verbs (
    id SERIAL PRIMARY KEY,
    hebrew TEXT NOT NULL,
    english TEXT NOT NULL
);

INSERT INTO verbs (id, hebrew, english) VALUES
(2,'לְהִשְׁתַּפֵּר','to improve'),
(3,'לִגְרוֹם','to cause, produce, result in'),
(4,'לעדכן','to update'),
(5,'לְהִצְטָרֵף','to join (a group, org, community)'),
(6,'לְהִתְמוֹדֵד','to cope, deal with'),
(7,'לוּכַל','can, to be able to (the infinitive is usually להיות מסוגל)'),
(8,'מְסוּגָּל','capable, able (just present use)'),
(9,'לְקַייֵּם','to fullfil, to make true; to maintain'),
(10,'לַחֲשׂוֹף','to reveal, to expose'),
(11,'לְהַשִּׂיג','to obtain, to achieve; to catch up with'),
(12,'לְהִיפָּצֵעַ','to be injured, to be wounded (niphal)`'),
(13,'לְאַשֵּׁר','to approve, to confirm, authorize'),
(14,'לְאַרְגֵּן','to organize, arrange'),
(15,'לְהַשְׁפִּיעַ','to influence (על)'),
(16,'לְפַרְסֵם','to advertise, to publish'),
(17,'לְהֵירָגֵעַ','to calm down, to relax'),
(18,'לְווַתֵּר','to give up'),
(19,'לְבַטֵּל','to cancel, to undo');
