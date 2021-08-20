class StartCell:
    pass


class PolicemanCell:
    pass


class StandardField:
    including_players_by_id = []

    def __init__(self, name="SUCK", start_price=0, selling_price=0, is_branch_possible=False,):
        pass

    def player_entered(self, player_id):
        self.including_players_by_id.append(player_id)

    def player_exited(self, player_id):
        self.including_players_by_id.remove(player_id)