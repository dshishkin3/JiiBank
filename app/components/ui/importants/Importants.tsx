import React, { FC } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { black_shadow } from "../../../styles";
import { handleTransferImportant } from "../../../utils/handleTransferImportant/handleTransferImportant";
import { useCards } from "../../../hooks/useCards";
import { useProfile } from "../../../hooks/useProfile";

const Importants: FC = () => {
  const { cards } = useCards();
  const { profile } = useProfile();

  return (
    <ImportantsBlock horizontal={true} showsHorizontalScrollIndicator={false}>
      {importants.map((important) => (
        <Important
          onPress={handleTransferImportant.bind(this, {
            fromCard: cards[0],
            cardNumber: important.cardNumber,
            name: important.name,
            _id: profile.docId,
          })}
          key={important.id}
          style={{ ...black_shadow }}
        >
          {important.icon}
          <NameImpornant>{important.name}</NameImpornant>
        </Important>
      ))}
    </ImportantsBlock>
  );
};

const ImportantsBlock = styled.ScrollView``;

const Important = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 15px;
  margin: 15px;
`;

const NameImpornant = styled.Text`
  margin-top: 5px;
`;

export default Importants;

const importants = [
  {
    id: 1,
    name: "Internet",
    icon: <AntDesign name="wifi" size={24} color="black" />,
    cardNumber: "1111 1111 1111 1111",
  },
  {
    id: 2,
    name: "Mobile",
    icon: <AntDesign name="mobile1" size={24} color="black" />,
    cardNumber: "2222 2222 2222 2222",
  },
  {
    id: 3,
    name: "TV",
    icon: <Feather name="tv" size={24} color="black" />,
    cardNumber: "3333 3333 3333 3333",
  },
  {
    id: 4,
    name: "Housing",
    icon: <MaterialIcons name="house" size={24} color="black" />,
    cardNumber: "4444 4444 4444 4444",
  },
];
