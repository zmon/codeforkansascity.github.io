<?php
/*
            [136] => stdClass Object
                (
                    [id] => U061L3KQB
                    [team_id] => T0423273A
                    [name] => zachflanders
                    [deleted] => 
                    [status] => 
                    [color] => bd9336
                    [real_name] => zach flanders
                    [tz] => America/Chicago
                    [tz_label] => Central Daylight Time
                    [tz_offset] => -18000
                    [profile] => stdClass Object
                        (
                            [first_name] => zach
                            [last_name] => flanders
                            [avatar_hash] => g94d54acb8c0
                            [real_name] => zach flanders
                            [real_name_normalized] => zach flanders
                            [email] => zachflanders@gmail.com
                            [image_24] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F0180%2Fimg%2Favatars%2Fava_0003-24.png
                            [image_32] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0003-32.png
                            [image_48] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0003-48.png
                            [image_72] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0003-72.png
                            [image_192] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0003-192.png
                            [image_512] => https://secure.gravatar.com/avatar/94d54acb8c0422d39b38c07043c8cd4c.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0003-512.png
                        )

                    [is_admin] => 
                    [is_owner] => 
                    [is_primary_owner] => 
                    [is_restricted] => 
                    [is_ultra_restricted] => 
                    [is_bot] => 
                    [has_2fa] => 
                )
*/
$json = json_decode(file_get_contents('slack-users.json'));


$fp = fopen('slack-users.csv', 'w');
    $u = array();
    fputcsv($fp, array( 'name', 'email'));
foreach( $json->members AS $user) {
   fputcsv($fp, array( $user->profile->real_name_normalized, $user->profile->email ));

}

fclose($fp);

