import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from "phosphor-react-native";
import { DuoInfo } from "../DuoInfo";

import { THEME } from "../../theme";
import { styles } from './styles';

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean; 
  weekDays: string[]; 
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Name"
        value={data.name}
      />
      <DuoInfo
        label="Year Playing"
        value={`${data.yearsPlaying} year${data.yearsPlaying === 1 ? '': 's'}`}
      />
      <DuoInfo
        label="Availability"
        value={`${data.weekDays.length} day${data.weekDays.length === 1 ? '': 's'} \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Audio call"
        value={data.useVoiceChannel ? "Yes" : "No"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Connect
        </Text>
      </TouchableOpacity>
    </View>
  );
}